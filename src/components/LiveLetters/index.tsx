import type { FC } from 'react';

import type { LivePreset } from '@/components/LiveType/types';

type PropsT = {
    text: string;
    preset: Extract<LivePreset, 'title' | 'cta'>;
};

export const LiveLetters: FC<PropsT> = (props) => {
    const { text, preset } = props;

    return [...text].map((letter, index) => (
        <span
            key={index}
            data-live-preset={preset}
        >
            {letter}
        </span>
    ));
};
