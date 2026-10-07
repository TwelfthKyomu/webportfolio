import type { FC } from 'react';

import { SkeletonLines } from '../SkeletonLines';

import styles from './DashboardMock.module.scss';

export const DashboardMock: FC = () => {
    return (
        <div className={styles.dashboard}>
            <div className={styles.metrics}>
                <div className={styles.metric}>
                    <SkeletonLines count={2} />
                </div>
                <div className={styles.metric}>
                    <SkeletonLines count={2} />
                </div>
                <div className={styles.metric}>
                    <SkeletonLines count={2} />
                </div>
            </div>
            <div className={styles.chart}>
                <SkeletonLines count={12} />
            </div>
        </div>
    );
};
