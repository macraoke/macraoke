import React from 'react';
import YouTube from 'react-youtube';
import SubtitlePlayer from '../SubtitlePlayer/SubtitlePlayer.lazy';
import './VideoPlayer.module.scss';

function onPlayPause(data: any) {
  console.log(data.target.getCurrentTime());
}

interface VideoPlayerProps { }
interface VideoPlayerState { }

class VideoPlayer extends React.Component<VideoPlayerProps, VideoPlayerState> {

  render(): React.ReactNode {

    return (<div>
      <YouTube
        videoId='f-s_Vv82yFw'
        onStateChange={onPlayPause}
      />
      <SubtitlePlayer />
    </div>)
  }
}

export default VideoPlayer;
