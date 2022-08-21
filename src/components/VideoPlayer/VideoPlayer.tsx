import React from 'react';
import YouTube, { YouTubeEvent } from 'react-youtube';
import SubtitlePlayer from '../SubtitlePlayer/SubtitlePlayer';
import './VideoPlayer.module.scss';

interface VideoPlayerProps { }

interface VideoPlayerState {
  playing: boolean;
  startTimestamp: number;
}

class VideoPlayer extends React.Component<VideoPlayerProps, VideoPlayerState> {

  constructor(props: VideoPlayerProps) {
    super(props);
    this.state = { playing: false, startTimestamp: 0 };
  }

  render(): React.ReactNode {
    return (<div>
      <YouTube
        videoId='f-s_Vv82yFw'
        onStateChange={this._onVideoStateChange.bind(this)}
      />
      <SubtitlePlayer
        startTimestamp={this.state.startTimestamp}
      />
    </div>)
  }

  private _onVideoStateChange(data: YouTubeEvent) {
    console.log(data.target.getCurrentTime());

    this.setState({ startTimestamp: data.target.getCurrentTime() * 1000 });
  }
}

export default VideoPlayer;
