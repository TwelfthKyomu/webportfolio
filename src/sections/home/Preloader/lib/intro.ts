import type { AnimationEvent } from 'react';

import { INTRO_SEEN_CLASS } from '@/constants/intro';
import { STORAGE_KEYS } from '@/constants/storage';

export function skipIntroIfSeen() {
    try {
        if (sessionStorage.getItem(STORAGE_KEYS.introSeen)) {
            document.documentElement.classList.add(INTRO_SEEN_CLASS);
        }
    } catch {}
}

export function rememberIntroSeen(event: AnimationEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;

    try {
        sessionStorage.setItem(STORAGE_KEYS.introSeen, 'true');
    } catch {}
}
