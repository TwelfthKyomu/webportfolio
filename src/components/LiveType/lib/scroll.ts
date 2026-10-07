import { MAX_SCROLL_STRETCH, SCROLL_SMOOTHING, SCROLL_SPEED_LIMIT } from '../constants';
import type { LiveTypeState } from '../types';

export function updateScrollSpeed(state: LiveTypeState) {
    const scrollDelta = Math.abs(scrollY - state.lastScrollY);

    state.scrollVelocity = state.reducedMotion
        ? 0
        : state.scrollVelocity * SCROLL_SMOOTHING + scrollDelta * (1 - SCROLL_SMOOTHING);
    state.lastScrollY = scrollY;

    return state.scrollVelocity < 0.1 ? 0 : Math.min(1, state.scrollVelocity / SCROLL_SPEED_LIMIT);
}

export function applyScrollStretch(state: LiveTypeState, scrollSpeed: number) {
    const scrollStretch = (1 + scrollSpeed * MAX_SCROLL_STRETCH).toFixed(3);

    if (scrollStretch === state.scrollStretch) return;

    state.scrollStretch = scrollStretch;
    state.root.style.setProperty('--scroll-stretch', scrollStretch);
}
