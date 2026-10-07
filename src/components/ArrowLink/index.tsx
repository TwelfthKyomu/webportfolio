import clsx from 'clsx';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';

import { Icon } from '@/components/Icon';
import type { IconName } from '@/components/Icon/constants';

import styles from './ArrowLink.module.scss';

type PropsT = {
    href: string;
    icon?: IconName;
    external?: boolean;
    className?: string;
    children: ReactNode;
};

export const ArrowLink: FC<PropsT> = (props) => {
    const { href, icon = 'arrowRight', external = false, className, children } = props;

    return (
        <Link
            className={clsx(styles.link, className)}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
        >
            {children}
            <Icon name={icon} />
        </Link>
    );
};
