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

  const nextBeat = (event: YouTubeEvent) => {
    if (!player) setPlayer(event.target);
    setTimestamp(Math.ceil(event.target.getCurrentTime() * 1000));
    if (isPlayerPlaying(event.target))
      setTimeout(nextBeat, UPDATE_INTERVAL, event);
  };

  const onVideoStateChange = (event: YouTubeEvent) => {
    nextBeat(event);
  };

  const onSeekerUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const toTimestamp = parseInt(event.target.value);
    player.seekTo(toTimestamp / 1000);
    setTimestamp(toTimestamp);
  };

  useEffect(() => {
    loadSubtitles();
  }, [props.videoId]);

  useEffect(() => {
    if (!!player)
      setDuration(player.getDuration() * 1000);
  }, [player]);

  return (
    <>
      <div className="relative">
        <YouTube
          videoId={props.videoId}
          ref={myRef}
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
