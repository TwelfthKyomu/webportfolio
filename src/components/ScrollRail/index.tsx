import type { FC } from 'react';

import styles from './ScrollRail.module.scss';

export const ScrollRail: FC = () => {
    return (
        <div
            className={styles.rail}
            aria-hidden="true"
        >
            <span>0</span>
            <span className={styles.track} />
            <span>100</span>
        </div>
    );
};
