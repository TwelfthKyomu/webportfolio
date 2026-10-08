import clsx from 'clsx';
import type { FC } from 'react';

import { SkeletonLines } from '../SkeletonLines';

import styles from './ShopMock.module.scss';

const PRODUCTS_COUNT = 6;

export const ShopMock: FC = () => {
    return (
        <div className={styles.shop}>
            <div className={styles.header}>
                <span className={styles.logo} />
                <span className={styles.search} />
                <span className={styles.cart} />
            </div>
            <div className={styles.grid}>
                {Array.from({ length: PRODUCTS_COUNT }, (_, index) => (
                    <div
                        key={index}
                        className={styles.product}
                    >
                        <span className={clsx(styles.photo, index === 1 && styles.accent)} />
                        <span className={styles.lines}>
                            <SkeletonLines count={2} />
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
