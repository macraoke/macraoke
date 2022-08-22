import React, { useEffect, useState } from 'react';
import { Subtext } from '../../interfaces/Subtext';
import Subtitle from '../Subtitle/Subtitle';
import './SubtitlePlayer.module.scss';

interface SubtitlePlayerProps {
  timestamp: number;
  subtexts: Subtext[];
}

const SubtitlePlayer: React.FC<SubtitlePlayerProps> = (props) => {

  const [subtextId, setSubtextId] = useState<number | undefined>(undefined);
  const [nextSubtextId, setNextSubtextId] = useState<number>(0);

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

  useEffect(() => {
    setNextSubtextId(subtextId === undefined ? nextSubtextId : subtextId + 1);
  }, [subtextId])

  return (
    <div className="absolute bottom-0 w-full text-center text-3xl font-bold px-6 py-10 bg-black/75">
      {subtextId !== undefined && subtextId < props.subtexts.length && (
        <Subtitle subtext={props.subtexts[subtextId]} />
      )}
      {/* TODO: refactor to Subtitle but deactivated */}
      <Subtitle subtext={props.subtexts[nextSubtextId]} deactivated />
    </div>
  );
};

export default SubtitlePlayer;
