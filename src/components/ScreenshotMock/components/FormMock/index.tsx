import clsx from 'clsx';
import type { FC } from 'react';

import { SkeletonLines } from '../SkeletonLines';

import styles from './FormMock.module.scss';

export const FormMock: FC = () => {
    return (
        <div className={styles.form}>
            <div className={styles.field}>
                <SkeletonLines count={2} />
            </div>
            <div className={styles.field}>
                <SkeletonLines count={2} />
            </div>
            <div className={clsx(styles.field, styles.error)}>
                <SkeletonLines count={2} />
            </div>
            <div className={clsx(styles.field, styles.tall)}>
                <SkeletonLines count={2} />
            </div>
            <span className={styles.button} />
        </div>
    );
};
