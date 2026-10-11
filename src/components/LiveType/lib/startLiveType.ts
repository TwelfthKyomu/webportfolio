import { VISIBILITY_MARGIN } from '../constants';

import { hideCursor, moveCursor, releaseCursor } from './cursor';
import { updateVisibleItems } from './items';
import { createLiveTypeState } from './state';

export function startLiveType() {
    const state = createLiveTypeState();
    const listeners = new AbortController();
    const { signal } = listeners;
    const observer = new IntersectionObserver((entries) => updateVisibleItems(state, entries), {
        rootMargin: VISIBILITY_MARGIN,
    });

    state.liveItems.forEach((item) => observer.observe(item.element));
    addEventListener('pointermove', (event) => moveCursor(state, event), { passive: true, signal });
    addEventListener('pointerup', (event) => releaseCursor(state, event), {
        passive: true,
        signal,
    });
    state.root.addEventListener('pointerleave', () => hideCursor(state), { signal });

    return () => {
        listeners.abort();
        observer.disconnect();
        cancelAnimationFrame(state.frameId);
    };
}
