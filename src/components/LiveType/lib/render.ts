import type { LiveTypeState } from '../types';

import { updateItemWeight } from './weight';

export function requestRender(state: LiveTypeState) {
    state.frameId ||= requestAnimationFrame(() => renderFrame(state));
}

export function renderFrame(state: LiveTypeState) {
    state.frameId = 0;

    const time = (performance.now() - state.startTime) / 1000;
    const measuredItems = [...state.visibleItems].map((item) => ({
        item,
        box: item.element.getBoundingClientRect(),
    }));
    let isAnimating = false;

    for (const { item, box } of measuredItems) {
        if (updateItemWeight(state, item, box, time)) isAnimating = true;
    }

    if (isAnimating) requestRender(state);
}
