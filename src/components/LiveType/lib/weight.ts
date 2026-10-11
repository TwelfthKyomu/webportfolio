import {
    HERO_WEIGHT_RANGE,
    INTRO_HOLD_SECONDS,
    INTRO_START_WEIGHT,
    REDUCED_MOTION_EASING,
    WEIGHT_EASING,
    WEIGHT_STEP,
} from '../constants';
import type { LiveItem, LiveTypeState } from '../types';

import { getCursorHeat, getIntroHeat } from './heat';

export function updateItemWeight(state: LiveTypeState, item: LiveItem, box: DOMRect, time: number) {
    const { cursor, introDelay, reducedMotion } = state;
    const cursorHeat = getCursorHeat(box, cursor, item.cursorRadius);
    const introHeat = item.hasIntro ? getIntroHeat(item.index, time, introDelay) : 0;
    const heat = Math.max(cursorHeat, introHeat);
    const isIntroHold = item.hasIntro && time < introDelay + INTRO_HOLD_SECONDS;
    const targetWeight = isIntroHold
        ? INTRO_START_WEIGHT
        : item.restWeight + (item.maxWeight - item.restWeight) * heat;
    const easing = reducedMotion ? REDUCED_MOTION_EASING : WEIGHT_EASING;

    item.weight += (targetWeight - item.weight) * easing;
    renderItemWeight(item);

    return item.hasIntro || Math.abs(targetWeight - item.weight) > 0.5;
}

export function renderItemWeight(item: LiveItem) {
    const renderedWeight = Math.round(item.weight / WEIGHT_STEP) * WEIGHT_STEP;

    if (renderedWeight === item.renderedWeight) return;

    item.renderedWeight = renderedWeight;
    item.element.style.fontWeight = String(renderedWeight);

    if (item.preset !== 'hero') return;

    const letterHeat = (item.weight - INTRO_START_WEIGHT) / HERO_WEIGHT_RANGE;

    item.element.style.setProperty('--letter-weight', String(renderedWeight));
    item.element.style.setProperty('--letter-heat', letterHeat.toFixed(3));
}
