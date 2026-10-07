import clsx from 'clsx';
import type { FC } from 'react';

import { SkeletonLines } from '../SkeletonLines';
import { SkeletonTable } from '../SkeletonTable';

import styles from './AdminMock.module.scss';

type PropsT = {
    fullWidth: boolean;
};

export const AdminMock: FC<PropsT> = (props) => {
    const { fullWidth } = props;

    return (
        <div className={clsx(styles.admin, fullWidth && styles.fullWidth)}>
            <div className={styles.sidebar}>
                <SkeletonLines count={fullWidth ? 6 : 5} />
            </div>
            <div className={styles.main}>
                <div className={styles.toolbar}>
                    <SkeletonLines count={2} />
                </div>
                <SkeletonTable
                    rows={fullWidth ? 7 : 5}
                    columns={fullWidth ? 4 : 3}
                    highlightedRow={fullWidth ? 2 : 1}
                    withHeader={fullWidth}
                />
            </div>
        </div>
    );
};
