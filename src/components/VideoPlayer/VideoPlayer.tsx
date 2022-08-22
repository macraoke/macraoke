import parseSRT from "parse-srt";
import React, { createRef, useEffect, useState } from "react";
import YouTube, { YouTubeEvent } from "react-youtube";
import { Subtext } from '../../interfaces/Subtext';
import SubtitlePlayer from '../SubtitlePlayer/SubtitlePlayer';
import "./VideoPlayer.module.scss";

interface VideoPlayerProps {
  videoId: string;
}

const UPDATE_INTERVAL = 100;
const isEventPlaying = (event: YouTubeEvent) => event.target.getPlayerState() === YouTube.PlayerState.PLAYING;

const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timestamp, setTimestamp] = useState<number>(0);
  const [subtexts, setSubtexts] = useState<Subtext[]>([]);
  const [intervalId, setIntervalId] = useState<number | undefined>(undefined);
  const myRef = createRef<YouTube>();

  const loadSubtitles = async () => {
    const response = await fetch(`subtitles/${props.videoId}.srt`);
    setSubtexts(parseSRT(await response.text()) as Subtext[]);
  }

  const nextBeat = (event: YouTubeEvent) => {
    setTimestamp(Math.ceil(event.target.getCurrentTime() * 1000));
    if (isEventPlaying(event))
      setTimeout(nextBeat, UPDATE_INTERVAL, event);
  };

  const onVideoStateChange = (event: YouTubeEvent) => {
    setPlaying(isEventPlaying(event));
    nextBeat(event);
  };

  useEffect(() => {
    loadSubtitles();
  }, [props.videoId]);

  return (
    <>
      <div className="relative">
        <YouTube
          videoId={props.videoId}
          ref={myRef}
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
          <SubtitlePlayer timestamp={timestamp + 500} subtexts={subtexts} />
        )}
      </div>
      <button onClick={() => myRef.current?.getInternalPlayer().playVideo()}>
        PLAY
      </button>
    </>
  );
};

export default VideoPlayer;
