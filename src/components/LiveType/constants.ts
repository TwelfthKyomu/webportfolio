import type { LivePreset, LivePresetSettings } from './types';

export const LIVE_TYPE_PRESETS: Record<LivePreset, LivePresetSettings> = {
    hero: { restWeight: 300, maxWeight: 900, cursorRadius: 460 },
    title: { restWeight: 500, maxWeight: 900, cursorRadius: 220 },
    cta: { restWeight: 300, maxWeight: 900, cursorRadius: 320 },
    word: { restWeight: 400, maxWeight: 800, cursorRadius: 300 },
    year: { restWeight: 300, maxWeight: 800, cursorRadius: 240 },
};

export const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

export const INTRO_START_WEIGHT = 200;

export const HERO_WEIGHT_RANGE = LIVE_TYPE_PRESETS.hero.maxWeight - INTRO_START_WEIGHT;

export const INTRO_HOLD_SECONDS = 0.9;

export const WEIGHT_STEP = 10;

export const WEIGHT_EASING = 0.16;

export const REDUCED_MOTION_EASING = 0.5;

export const SCROLL_SMOOTHING = 0.86;

export const SCROLL_SPEED_LIMIT = 38;

export const SCROLL_HEAT = 0.8;

export const MAX_SCROLL_STRETCH = 0.14;

export const VISIBILITY_MARGIN = '80px 0px';
