import type { LiveTypeState } from '../types';

import { requestRender } from './render';

export function moveCursor(state: LiveTypeState, event: PointerEvent) {
    state.cursor.x = event.clientX;
    state.cursor.y = event.clientY;
    state.cursor.active = true;
    requestRender(state);
}

export function hideCursor(state: LiveTypeState) {
    state.cursor.active = false;
    requestRender(state);
}

export function releaseCursor(state: LiveTypeState, event: PointerEvent) {
    if (event.pointerType !== 'mouse') hideCursor(state);
}
