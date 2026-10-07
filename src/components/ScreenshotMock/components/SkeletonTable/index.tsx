import clsx from 'clsx';
import type { FC } from 'react';

import { SkeletonLines } from '../SkeletonLines';

import styles from './SkeletonTable.module.scss';

type PropsT = {
    rows: number;
    columns: number;
    highlightedRow: number;
    withHeader?: boolean;
};

export const SkeletonTable: FC<PropsT> = (props) => {
    const { rows, columns, highlightedRow, withHeader = false } = props;

    return (
        <div className={styles.table}>
            {Array.from({ length: rows }, (_, index) => (
                <div
                    key={index}
                    className={clsx(
                        styles.row,
                        index === highlightedRow && styles.highlighted,
                        withHeader && index === 0 && styles.header
                    )}
                >
                    <SkeletonLines count={columns} />
                </div>
            ))}
        </div>
    );
};
