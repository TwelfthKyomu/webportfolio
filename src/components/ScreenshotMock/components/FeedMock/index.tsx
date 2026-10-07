import clsx from 'clsx';
import type { FC } from 'react';

import { SkeletonLines } from '../SkeletonLines';

import styles from './FeedMock.module.scss';

export const FeedMock: FC = () => {
    return (
        <div className={styles.feed}>
            <div className={styles.phone}>
                <div className={clsx(styles.card, styles.accent)}>
                    <SkeletonLines count={2} />
                </div>
                <div className={styles.card}>
                    <SkeletonLines count={2} />
                </div>
                <div className={styles.card}>
                    <SkeletonLines count={2} />
                </div>
            </div>
            <div className={styles.phone}>
                <div className={clsx(styles.card, styles.large)}>
                    <SkeletonLines count={2} />
                </div>
                <div className={styles.card}>
                    <SkeletonLines count={2} />
                </div>
            </div>
        </div>
    );
};
