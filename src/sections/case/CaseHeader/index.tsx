import clsx from 'clsx';
import Link from 'next/link';
import type { FC } from 'react';

import { Icon } from '@/components/Icon';
import { Logo } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { toTwoDigits } from '@/lib/format';

import styles from './CaseHeader.module.scss';

type PropsT = {
    number: number;
    worksCount: number;
};

export const CaseHeader: FC<PropsT> = (props) => {
    const { number, worksCount } = props;

    return (
        <header className={clsx('container', styles.header)}>
            <Link
                className={styles.back}
                href="/#works"
            >
                <Icon name="arrowLeft" />
                Все работы
            </Link>
            <Logo />
            <div className={styles.actions}>
                <span className={styles.counter}>
                    Работа {toTwoDigits(number)} / {toTwoDigits(worksCount)}
                </span>
                <ThemeToggle />
            </div>
        </header>
    );
};
