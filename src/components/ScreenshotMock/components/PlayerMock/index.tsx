import type { FC } from 'react';

import { SkeletonLines } from '../SkeletonLines';

import styles from './PlayerMock.module.scss';

const EPISODES_COUNT = 5;

export const PlayerMock: FC = () => {
    return (
        <div className={styles.player}>
            <div className={styles.video}>
                <span className={styles.play} />
                <span className={styles.timeline}>
                    <span className={styles.progress} />
                </span>
            </div>
            <div className={styles.episodes}>
                {Array.from({ length: EPISODES_COUNT }, (_, index) => (
                    <div
                        key={index}
                        className={styles.episode}
                    >
                        <span className={styles.thumb} />
                        <span className={styles.lines}>
                            <SkeletonLines count={2} />
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
