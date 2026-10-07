import type { FC, ReactNode } from 'react';

import { toTwoDigits } from '@/lib/format';

import styles from './Chapter.module.scss';

type PropsT = {
    number: number;
    title: string;
    children: ReactNode;
};

export const Chapter: FC<PropsT> = (props) => {
    const { number, title, children } = props;

    return (
        <article className={styles.chapter}>
            <div className={styles.heading}>
                <span>{toTwoDigits(number)}</span>
                <h2>{title}</h2>
            </div>
            <div className={styles.body}>{children}</div>
        </article>
    );
};
