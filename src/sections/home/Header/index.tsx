import clsx from 'clsx';
import type { FC } from 'react';

import { Logo } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { SECTIONS } from '@/constants/sections';
import { toTwoDigits } from '@/lib/format';

import styles from './Header.module.scss';

export const Header: FC = () => {
    return (
        <header
            id="top"
            className={clsx('container', styles.header)}
        >
            <Logo />
            <nav
                className={styles.navigation}
                aria-label="Разделы"
            >
                {SECTIONS.map((section, index) => (
                    <a
                        key={section.id}
                        className={styles.link}
                        href={`#${section.id}`}
                    >
                        <small>{toTwoDigits(index + 1)}</small>
                        <span className={styles.roll}>
                            <span data-text={section.label}>{section.label}</span>
                        </span>
                    </a>
                ))}
            </nav>
            <ThemeToggle />
        </header>
    );
};
