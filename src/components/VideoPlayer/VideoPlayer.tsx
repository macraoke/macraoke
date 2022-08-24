import parseSRT from "parse-srt";
import React, { createRef, useEffect, useState } from "react";
import YouTube, { YouTubeEvent, YouTubePlayer } from "react-youtube";
import { Subtext, SUBTEXT_DURATION } from '../../interfaces/Subtext';
import SubtitlePlayer from '../SubtitlePlayer/SubtitlePlayer';
import "./VideoPlayer.module.scss";

interface VideoPlayerProps {
  videoId: string;
}

const UPDATE_INTERVAL = 200;
const isPlayerPlaying = (player: YouTubePlayer) => player.getPlayerState() === YouTube.PlayerState.PLAYING;

const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
  const [timestamp, setTimestamp] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [subtexts, setSubtexts] = useState<Subtext[]>([]);
  const [player, setPlayer] = useState<YouTubePlayer | undefined>(undefined);
  const [timeoutId, setTimeoutId] = useState<number | undefined>(undefined);
  const myRef = createRef<YouTube>();

  const loadSubtitles = async () => {
    const response = await fetch(`/subtitles/${props.videoId}.srt`);
    const loadedSubtexts = parseSRT(await response.text()) as Subtext[];
    const delay = SUBTEXT_DURATION / 1000;
    const first321subtext: Subtext = {
      id: 0,
      start: loadedSubtexts[0].start - 1 - 2 * SUBTEXT_DURATION / 1000,
      end: loadedSubtexts[0].start - delay,
      text: "(3, 2, 1)"
    };
    setSubtexts([first321subtext, ...loadedSubtexts]);
  }

  const nextBeat = (player: YouTubePlayer) => {
    if (!player) return;
    setTimestamp(Math.ceil(player.getCurrentTime() * 1000));
    setTimeoutId(timeoutId => {
      clearTimeout(timeoutId);
      let newTimer: number | undefined = undefined;
      if (isPlayerPlaying(player))
        newTimer = setTimeout(() => nextBeat(player), UPDATE_INTERVAL);
      return newTimer;

    });
  };

  const onVideoStateChange = (event: YouTubeEvent) => {
    clearTimeout(timeoutId);
    if (event.target !== player && !!event.target)
      setPlayer(event.target);
    if (!!event.target && isPlayerPlaying(event.target)) nextBeat(event.target);
  };

  const onSeekerUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const toTimestamp = parseInt(event.target.value);
    player.seekTo(toTimestamp / 1000);
    setTimestamp(toTimestamp);
  };

  const setDurationOnReady = (event: YouTubeEvent) => {
    setDuration(event.target.getDuration() * 1000);
  };

  useEffect(() => {
    clearTimeout(timeoutId);
    setPlayer(undefined);
    setTimestamp(0);
    setSubtexts([]);
    loadSubtitles();
  }, [props.videoId]);

  return (
    <>
      <div className="relative">
        <YouTube
          ref={myRef}
          videoId={props.videoId}
          className="w-full"
          style={{ height: "calc(100vh - 230px)" }}
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
          onReady={setDurationOnReady}
        />
        {!!player && subtexts.length > 0 && (
          <SubtitlePlayer timestamp={timestamp + SUBTEXT_DURATION} subtexts={subtexts} />
        )}
      </div>

      {!!player && (
        <div className="w-full">
          <a onClick={() => isPlayerPlaying(player) ? player.pauseVideo() : player.playVideo()} >
            Play/Pause
          </a>
          <input type="range" id="volume" name="volume"
            min={0}
            max={duration}
            value={timestamp}
            onChange={onSeekerUpdate} />
        </div>
      )}

    </>
  );
};

export default VideoPlayer;
