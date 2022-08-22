import parseSRT from "parse-srt";
import React, { useEffect, createRef, useState } from "react";
import YouTube, { YouTubeEvent } from "react-youtube";
import { Subtext } from "../../interfaces/Subtext";
import SubtitlePlayer from "../SubtitlePlayer/SubtitlePlayer";
import "./VideoPlayer.module.scss";

interface VideoPlayerState {
  playing: boolean;
  timestamp: number;
  subtexts: Subtext[];
  interval?: number;
}

interface VideoPlayerProps {
  videoId: string;
}

const UPDATE_INTERVAL = 100;

const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
  const [state, setState] = useState<VideoPlayerState>({
    playing: false,
    timestamp: 0,
    subtexts: [],
    interval: undefined,
  });

  const myRef = createRef<YouTube>();

  const loadSubtitles = async () => {
    const response = await fetch(`/subtitles/${props.videoId}.srt`);
    setState({ ...state, subtexts: parseSRT(await response.text()) });
  };

  const onVideoStateChange = (event: YouTubeEvent) => {
    setState({
      ...state,
      timestamp: Math.ceil(event.target.getCurrentTime() * 1000),
      playing: event.target.getPlayerState() === YouTube.PlayerState.PLAYING,
    });
  };

  const nextBeat = () => {
    setState((state) => ({
      ...state,
      timestamp: state.timestamp + UPDATE_INTERVAL,
    }));
  };

  useEffect(() => {
    loadSubtitles();
  }, [props.videoId]);

  useEffect(() => {
    clearInterval(state.interval);
    if (state.playing) {
      const interval = setInterval(nextBeat, UPDATE_INTERVAL);
      setState((state) => ({
        ...state,
        interval,
      }));
    } else setState({ ...state, interval: undefined });
  }, [state.playing]);

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
      <p>{state.timestamp}</p>
      {state.subtexts.length > 0 && (
        <SubtitlePlayer timestamp={state.timestamp} subtexts={state.subtexts} />
      )}
      <button onClick={() => myRef.current?.getInternalPlayer().playVideo()}>
        PLAY
      </button>
    </>
  );
};

// LyricsPlayer --> lyrics + current time

export default VideoPlayer;
