import { REDUCED_MOTION_QUERY } from '../constants';
import type { LiveTypeState } from '../types';

import { collectLiveItems } from './items';

export function createLiveTypeState(): LiveTypeState {
    const root = document.documentElement;
    const reducedMotion = matchMedia(REDUCED_MOTION_QUERY).matches;

    return {
        root,
        reducedMotion,
        introDelay: parseFloat(getComputedStyle(root).getPropertyValue('--intro-delay')) || 0,
        startTime: performance.now(),
        cursor: { x: 0, y: 0, active: false },
        liveItems: collectLiveItems(reducedMotion),
        visibleItems: new Set(),
        frameId: 0,
    };
}
