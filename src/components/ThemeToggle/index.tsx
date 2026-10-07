'use client';

import type { FC } from 'react';

import { useTheme } from './hooks/useTheme';
import styles from './ThemeToggle.module.scss';

export const ThemeToggle: FC = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button
            className={styles.button}
            type="button"
            aria-label="Тёмная тема"
            aria-pressed={isDark}
            onClick={toggleTheme}
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <circle
                    cx="12"
                    cy="12"
                    r="8"
                />
                <path d="M12 4a8 8 0 0 1 0 16z" />
            </svg>
        </button>
    );
};
