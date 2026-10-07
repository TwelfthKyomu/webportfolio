'use client';

import type { FC } from 'react';

import { PROFILE } from '@/constants/profile';

import { useSkipSeenIntro } from './hooks/useSkipSeenIntro';
import { rememberIntroSeen } from './lib/intro';
import styles from './Preloader.module.scss';

export const Preloader: FC = () => {
    useSkipSeenIntro();

    return (
        <div
            className={styles.preloader}
            aria-hidden="true"
            onAnimationEnd={rememberIntroSeen}
        >
            <div className={styles.top}>
                <span>{PROFILE.name} — портфолио</span>
                <span>Загружаю шрифт · wght 200 → 900</span>
            </div>
            <div className={styles.bottom}>
                <span className={styles.percent} />
                <span className={styles.bar} />
            </div>
        </div>
    );
};
