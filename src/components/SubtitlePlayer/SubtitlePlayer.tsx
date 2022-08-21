import React, { useEffect, useState } from 'react';
import { Subtext } from '../../interfaces/Subtext';
import './SubtitlePlayer.module.scss';

interface SubtitlePlayerProps {
  timestamp: number;
  subtexts: Subtext[];
}

interface SubtitlePlayerState {
  subtextId?: number;
}

const SubtitlePlayer: React.FC<SubtitlePlayerProps> = (props) => {

  const [state, setState] = useState<SubtitlePlayerState>({
    subtextId: 0
  });

  const findNextSubTextId = (id: number): number | undefined => {
    if (id >= props.subtexts.length) return undefined;
    const subtext = props.subtexts[id];
    const start = Math.floor(subtext.start * 1000);
    const end = Math.floor(subtext.end * 1000);
    const now = props.timestamp;
    if (now <= end) {
      if (now < start) // didn't start yet
        return undefined;
      return id;
    }
    return findNextSubTextId(id + 1);
  };

  useEffect(() => {
    setState(state => ({
      ...state,
      subtextId: findNextSubTextId(state.subtextId || 0)
    }));
  }, [props.timestamp]);

  return (
    <>
      <p>{state.subtextId !== undefined && props.subtexts[state.subtextId].text}</p>
    </>
  );
};

export default SubtitlePlayer;
