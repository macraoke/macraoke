import parseSRT from "parse-srt";
import React, { createRef, useContext, useEffect, useState } from "react";
import YouTube, { YouTubeEvent } from "react-youtube";
import Context from "../../context/Context";
import { Subtext, SUBTEXT_DURATION } from "../../interfaces/Subtext";
import SubtitlePlayer from "../SubtitlePlayer/SubtitlePlayer";
import "./VideoPlayer.module.scss";

const UPDATE_INTERVAL = 100;
const isEventPlaying = (event: YouTubeEvent) =>
  event.target.getPlayerState() === YouTube.PlayerState.PLAYING;

const VideoPlayer: React.FC<{}> = () => {
  const [timestamp, setTimestamp] = useState<number>(0);
  const [subtexts, setSubtexts] = useState<Subtext[]>([]);
  const YTPlayerRef = createRef<YouTube>();

  const [state, _dispatch] = useContext(Context);

  const loadSubtitles = async () => {
    const response = await fetch(`subtitles/${state.video}.srt`);
    const loadedSubtexts = parseSRT(await response.text()) as Subtext[];
    const delay = SUBTEXT_DURATION / 1000;
    const first321subtext: Subtext = {
      id: 0,
      start: loadedSubtexts[0].start - 1 - (2 * SUBTEXT_DURATION) / 1000,
      end: loadedSubtexts[0].start - delay,
      text: "(3, 2, 1)",
    };
    setSubtexts([first321subtext, ...loadedSubtexts]);
  };

  const nextBeat = (event: YouTubeEvent) => {
    setTimestamp(Math.ceil(event.target.getCurrentTime() * 1000));
    if (isEventPlaying(event)) setTimeout(nextBeat, UPDATE_INTERVAL, event);
  };

  const onVideoStateChange = (event: YouTubeEvent) => {
    nextBeat(event);
  };

  useEffect(() => {
    loadSubtitles();
  }, [state.video]);

  return (
    <>
      <div className="relative">
        <YouTube
          videoId={state.video}
          ref={YTPlayerRef}
          style={{ width: "100%", height: "calc(100vh - 230px)" }}
          opts={{
            width: "100%",
            height: "100%",
            playerVars: {
              autoplay: 1,
              modestbranding: 1,
              controls: 0,
              cc_load_policy: 3,
              iv_load_policy: 3,
              rel: 0,
            },
          }}
          onStateChange={onVideoStateChange}
        />
        {subtexts.length > 0 && (
          <SubtitlePlayer
            timestamp={timestamp + SUBTEXT_DURATION}
            subtexts={subtexts}
          />
        )}
      </div>
      <button
        onClick={() => YTPlayerRef.current?.getInternalPlayer().playVideo()}
      >
        PLAY
      </button>
    </>
  );
};

export default VideoPlayer;
