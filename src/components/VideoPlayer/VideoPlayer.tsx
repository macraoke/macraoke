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
    setState({
      ...state,
      startTimestamp: data.target.getCurrentTime() * 1000,
      playing: data.target.getPlayerState() === 1,
    });
  };

  return (
    <>
      <YouTube
        videoId="f-s_Vv82yFw"
        style={{ width: "100%", height: "calc(100vh - 230px)" }}
        opts={{ width: "100%", height: "100%" }}
        onStateChange={_onVideoStateChange}
      />
      <SubtitlePlayer
        startTimestamp={state.startTimestamp}
        playing={state.playing}
      />
    </>
  );
};

export default VideoPlayer;
