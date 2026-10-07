import type { MouseEvent } from 'react';

import { STORAGE_KEYS } from '@/constants/storage';

import { DARK_THEME_QUERY } from '../constants';
import type { Theme } from '../types';

export function isDarkTheme() {
    const { theme } = document.documentElement.dataset;

    return theme ? theme === 'dark' : matchMedia(DARK_THEME_QUERY).matches;
}

export function subscribeToTheme(onChange: () => void) {
    const observer = new MutationObserver(onChange);
    const systemTheme = matchMedia(DARK_THEME_QUERY);

    observer.observe(document.documentElement, { attributeFilter: ['data-theme'] });
    systemTheme.addEventListener('change', onChange);

    return () => {
        observer.disconnect();
        systemTheme.removeEventListener('change', onChange);
    };
}

export function setRevealOrigin(button: HTMLElement) {
    const box = button.getBoundingClientRect();
    const centerX = box.left + box.width / 2;
    const centerY = box.top + box.height / 2;
    const radius = Math.hypot(
        Math.max(centerX, innerWidth - centerX),
        Math.max(centerY, innerHeight - centerY)
    );
    const { style } = document.documentElement;

    style.setProperty('--theme-x', `${centerX}px`);
    style.setProperty('--theme-y', `${centerY}px`);
    style.setProperty('--theme-radius', `${radius}px`);
}

export function applyTheme(theme: Theme) {
    document.documentElement.dataset.theme = theme;
}

export function saveTheme(theme: Theme) {
    try {
        localStorage.setItem(STORAGE_KEYS.theme, theme);
    } catch {}
}

export function toggleTheme(event: MouseEvent<HTMLButtonElement>) {
    const theme: Theme = isDarkTheme() ? 'light' : 'dark';

    setRevealOrigin(event.currentTarget);

    if (document.startViewTransition) {
        document.startViewTransition(() => applyTheme(theme)).ready.catch(() => {});
    } else {
        applyTheme(theme);
    }

    saveTheme(theme);
}
