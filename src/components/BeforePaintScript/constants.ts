import { INTRO_SEEN_CLASS } from '@/constants/intro';
import { STORAGE_KEYS } from '@/constants/storage';

export const BEFORE_PAINT_SCRIPT = `
try {
    const root = document.documentElement;
    const theme = localStorage.getItem('${STORAGE_KEYS.theme}');

    if (theme) root.dataset.theme = theme;
    if (sessionStorage.getItem('${STORAGE_KEYS.introSeen}')) root.classList.add('${INTRO_SEEN_CLASS}');
} catch {}
`;
