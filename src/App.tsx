import React from 'react';
import YouTube from 'react-youtube';
import './App.css';

function onPlayPause(data: any) {
  console.log(data.target.getCurrentTime());
}

function App() {
  return (
    <YouTube
      videoId='f-s_Vv82yFw'
      onStateChange={onPlayPause}
    />
  );
}

export default App;
