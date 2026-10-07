import type { FC } from 'react';

import { PROFILE } from '@/constants/profile';

import styles from './HeroName.module.scss';

export const HeroName: FC = () => {
    return (
        <h1
            className={styles.name}
            aria-label={PROFILE.name}
        >
            {[...PROFILE.name.toUpperCase()].map((letter, index) => (
                <span
                    key={index}
                    className={styles.letter}
                    data-live-preset="hero"
                    data-index={index}
                >
                    <span className={styles.mask}>
                        <span className={styles.glyph}>{letter}</span>
                    </span>
                    <span className={styles.weightMeter} />
                </span>
            ))}
        </h1>
    );
};
