import React, { lazy, Suspense } from 'react';

const LazySubtitlePlayer = lazy(() => import('./SubtitlePlayer'));

const SubtitlePlayer = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySubtitlePlayer {...props} />
  </Suspense>
);

export default SubtitlePlayer;
