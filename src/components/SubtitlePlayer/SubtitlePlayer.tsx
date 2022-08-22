import React, { useEffect, useState } from 'react';
import { Subtext } from '../../interfaces/Subtext';
import './SubtitlePlayer.module.scss';

interface SubtitlePlayerProps {
  timestamp: number;
  subtexts: Subtext[];
}

const SubtitlePlayer: React.FC<SubtitlePlayerProps> = (props) => {

  const [subtextId, setSubtextId] = useState<number|undefined>(undefined);

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
    setSubtextId(subtextId => findNextSubTextId(subtextId || 0));
  }, [props.timestamp]);

  return (
    <>
      <p>{subtextId !== undefined && subtextId < props.subtexts.length && props.subtexts[subtextId].text}</p>
    </>
  );
};

export default SubtitlePlayer;
