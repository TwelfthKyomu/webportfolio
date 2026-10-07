import type { FC } from 'react';

import { SkeletonTable } from '../SkeletonTable';

import styles from './TableMock.module.scss';

export const TableMock: FC = () => {
    return (
        <div className={styles.table}>
            <SkeletonTable
                rows={6}
                columns={4}
                highlightedRow={3}
                withHeader
            />
        </div>
    );
};
