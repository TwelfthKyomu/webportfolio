import type { FC } from 'react';

import styles from './SkeletonLines.module.scss';

type PropsT = {
    count: number;
};

export const SkeletonLines: FC<PropsT> = (props) => {
    const { count } = props;

    return Array.from({ length: count }, (_, index) => (
        <span
            key={index}
            className={styles.line}
        />
    ));
};
