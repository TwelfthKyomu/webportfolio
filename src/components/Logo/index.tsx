import Link from 'next/link';
import type { FC } from 'react';

import { PROFILE } from '@/constants/profile';

import styles from './Logo.module.scss';

export const Logo: FC = () => {
    return (
        <Link
            className={styles.logo}
            href="/"
        >
            {PROFILE.name}
            <span className={styles.dot} />
        </Link>
    );
};
