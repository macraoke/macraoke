import React, { useState } from "react";
import YouTube, { YouTubeEvent } from "react-youtube";
import SubtitlePlayer from "../SubtitlePlayer/SubtitlePlayer";
import "./VideoPlayer.module.scss";

interface VideoPlayerState {
  playing: boolean;
  startTimestamp: number;
}

const VideoPlayer: React.FC<{}> = () => {
  const [state, setState] = useState<VideoPlayerState>({
    playing: false,
    startTimestamp: 0,
  });

  const _onVideoStateChange = (data: YouTubeEvent) => {
    console.log(data.target.getCurrentTime());

    setState({ ...state, startTimestamp: data.target.getCurrentTime() * 1000 });
  };

  return (
    <>
      <YouTube videoId="f-s_Vv82yFw" onStateChange={_onVideoStateChange} />
      <SubtitlePlayer startTimestamp={state.startTimestamp} />
    </>
  );
};

export default VideoPlayer;
