import parseSRT from "parse-srt";
import React, { useEffect, createRef, useState } from "react";
import YouTube, { YouTubeEvent } from "react-youtube";
import { Subtext } from '../../interfaces/Subtext';
import SubtitlePlayer from '../SubtitlePlayer/SubtitlePlayer';
import "./VideoPlayer.module.scss";

interface VideoPlayerProps {
  videoId: string;
}

const UPDATE_INTERVAL = 100;

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

  const onVideoStateChange = (event: YouTubeEvent) => {
    setPlaying(event.target.getPlayerState() === YouTube.PlayerState.PLAYING);
    setTimestamp(Math.ceil(event.target.getCurrentTime() * 1000));
  };

  const nextBeat = () => {
    setTimestamp(timestamp => timestamp + UPDATE_INTERVAL);
  };

  useEffect(() => {
    loadSubtitles();
  }, [props.videoId]);

  useEffect(() => {
    clearInterval(intervalId);
    if (playing)
      setIntervalId(setInterval(nextBeat, UPDATE_INTERVAL));
    else
      setIntervalId(undefined);
  }, [playing])

  return (
    <>
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
        <SubtitlePlayer timestamp={timestamp} subtexts={subtexts} />
      )}
      <button onClick={() => myRef.current?.getInternalPlayer().playVideo()}>
        PLAY
      </button>
    </>
  );
};

export default VideoPlayer;
