import type { LiveTypeState } from '../types';

import { applyScrollStretch, updateScrollSpeed } from './scroll';
import { updateItemWeight } from './weight';

export function requestRender(state: LiveTypeState) {
    state.frameId ||= requestAnimationFrame(() => renderFrame(state));
}

export function renderFrame(state: LiveTypeState) {
    state.frameId = 0;

    const time = (performance.now() - state.startTime) / 1000;
    const scrollSpeed = updateScrollSpeed(state);
    const measuredItems = [...state.visibleItems].map((item) => ({
        item,
        box: item.element.getBoundingClientRect(),
    }));
    let isAnimating = scrollSpeed > 0;

    applyScrollStretch(state, scrollSpeed);

    for (const { item, box } of measuredItems) {
        if (updateItemWeight(state, item, box, time, scrollSpeed)) isAnimating = true;
    }

    if (isAnimating) requestRender(state);
}
