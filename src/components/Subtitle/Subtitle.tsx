import React, { useEffect, useState } from 'react';
import { Subtext } from '../../interfaces/Subtext';
import { IWord } from '../../interfaces/Word';
import Word from '../Word/Word';
import './Subtitle.module.scss';

interface SubtitleProps {
  subtext: Subtext;
  deactivated?: boolean;
}

const Subtitle: React.FC<SubtitleProps> = (props) => {

  const [words, setWords] = useState<IWord[]>([]);

  useEffect(() => {
    if (props.subtext === undefined) return;
    const duration = Math.ceil((props.subtext.end - props.subtext.start) * 1000);
    const words = props.subtext.text.replaceAll('<br />', ' ').split(' ');
    const averageDuration = duration / words.length;
    setWords(words.map((word, index) => ({
      word, activationDelay: !!props.deactivated ? undefined : index * averageDuration * 0.90
    })));
  }, [props.subtext, props.deactivated]);

  return (
    <><p>
      {words.map((word, index) =>
        (<Word key={index} {...word} />)
      )}
    </p></>
  );
};

export default Subtitle;
