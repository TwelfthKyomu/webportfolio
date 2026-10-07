import clsx from 'clsx';
import Link from 'next/link';
import type { FC } from 'react';

import { PROFILE } from '@/constants/profile';

import styles from './Footer.module.scss';

type PropsT = {
    linkHref: string;
    linkLabel: string;
    className?: string;
};

export const Footer: FC<PropsT> = (props) => {
    const { linkHref, linkLabel, className } = props;

    return (
        <footer className={clsx(styles.footer, className)}>
            <span>
                © {new Date().getFullYear()} {PROFILE.name}
            </span>
            <Link href={linkHref}>{linkLabel}</Link>
        </footer>
    );
};
