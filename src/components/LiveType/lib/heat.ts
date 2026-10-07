import type { Cursor } from '../types';

export function getCursorHeat(box: DOMRect, cursor: Cursor, radius: number) {
    if (!cursor.active) return 0;

    const offsetX = cursor.x - (box.left + box.width / 2);
    const offsetY = (cursor.y - (box.top + box.height / 2)) * 1.25;
    const proximity = Math.max(0, 1 - Math.hypot(offsetX, offsetY) / radius);

    return proximity * proximity * (3 - 2 * proximity);
}

export function getIntroHeat(
    index: number,
    time: number,
    introDelay: number,
    cursorActive: boolean
) {
    const wavePeak = introDelay + 1.35 + index * 0.13;
    const wave = Math.exp(-(((time - wavePeak) / 0.24) ** 2));
    const breath = cursorActive ? 0 : 0.06 + 0.15 * (1 + Math.sin(time * 1.15 - index * 0.85));

    return Math.max(wave, breath);
}
