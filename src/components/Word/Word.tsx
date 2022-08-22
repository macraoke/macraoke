import React, { useEffect, useState } from 'react';
import { IWord } from '../../interfaces/Word';
import './Word.css';

interface WordProps extends IWord { }

const Word: React.FC<WordProps> = (props) => {
    const [activated, setActivated] = useState<boolean>(false);

    useEffect(() => {
        setActivated(false);
        if (props.activationDelay !== undefined)
            setTimeout(setActivated, props.activationDelay, true);
    }, [props.activationDelay]);

    return (<>
        <span className={activated ? 'on' : 'off'}>{props.word} </span>
    </>)
};

export default Word;