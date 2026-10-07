import type { FC } from 'react';

import type { LivePreset } from '@/components/LiveType/types';

import styles from './LiveWord.module.scss';

type PropsT = {
    text: string;
    preset: Extract<LivePreset, 'word' | 'year'>;
};

export const LiveWord: FC<PropsT> = (props) => {
    const { text, preset } = props;

    return (
        <span
            className={styles.word}
            data-text={text}
        >
            <span data-live-preset={preset}>{text}</span>
        </span>
    );
};
