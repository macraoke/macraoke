import React, { lazy, Suspense } from 'react';

const LazyVideoPlayer = lazy(() => import('./VideoPlayer'));

const VideoPlayer = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyVideoPlayer {...props} />
  </Suspense>
);

export default VideoPlayer;
