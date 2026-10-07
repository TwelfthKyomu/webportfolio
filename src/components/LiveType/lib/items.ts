import { INTRO_START_WEIGHT, LIVE_TYPE_PRESETS } from '../constants';
import type { LiveItem, LivePreset, LiveTypeState } from '../types';

import { requestRender } from './render';

export function isLivePreset(value: string | undefined): value is LivePreset {
    return value !== undefined && Object.hasOwn(LIVE_TYPE_PRESETS, value);
}

export function collectLiveItems(reducedMotion: boolean) {
    const liveItems = new Map<Element, LiveItem>();

    for (const element of document.querySelectorAll<HTMLElement>('[data-live-preset]')) {
        const { livePreset, index } = element.dataset;

        if (!isLivePreset(livePreset)) continue;

        const settings = LIVE_TYPE_PRESETS[livePreset];
        const hasIntro = livePreset === 'hero' && !reducedMotion;

        liveItems.set(element, {
            ...settings,
            element,
            preset: livePreset,
            hasIntro,
            index: Number(index ?? 0),
            weight: hasIntro ? INTRO_START_WEIGHT : settings.restWeight,
            renderedWeight: 0,
        });
    }

    return liveItems;
}

export function updateVisibleItems(state: LiveTypeState, entries: IntersectionObserverEntry[]) {
    for (const entry of entries) {
        const item = state.liveItems.get(entry.target);

        if (!item) continue;

        if (entry.isIntersecting) state.visibleItems.add(item);
        else state.visibleItems.delete(item);
    }

    requestRender(state);
}
