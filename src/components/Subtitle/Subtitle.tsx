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

  const [nextWordId, setNextWordId] = useState<number>(0);
  const [words, setWords] = useState<IWord[]>([]);

  useEffect(() => {
    setNextWordId(0);
    // TODO: calc word duration function of word length and sentence duration
    const duration = Math.ceil((props.subtext.end - props.subtext.start) * 1000);
    const words = props.subtext.text.replace('<br />', ' ').split(' ');
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

// TODO
// - split words
// - duration --> highlight words slowly

export default Subtitle;
