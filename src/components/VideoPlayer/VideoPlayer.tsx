import { FC } from 'react';
import YouTube from 'react-youtube';
import './VideoPlayer.module.scss';

function onPlayPause(data: any) {
  console.log(data.target.getCurrentTime());
}

interface VideoPlayerProps {}

const VideoPlayer: FC<VideoPlayerProps> = () => (
  <YouTube
      videoId='f-s_Vv82yFw'
      onStateChange={onPlayPause}
    />
);

export default VideoPlayer;
