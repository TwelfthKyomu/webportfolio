export type LivePreset = 'hero' | 'title' | 'cta' | 'word' | 'year';

export type LivePresetSettings = {
    restWeight: number;
    maxWeight: number;
    cursorRadius: number;
};

export type LiveItem = LivePresetSettings & {
    element: HTMLElement;
    preset: LivePreset;
    hasIntro: boolean;
    index: number;
    weight: number;
    renderedWeight: number;
};

export type Cursor = {
    x: number;
    y: number;
    active: boolean;
};

export type LiveTypeState = {
    root: HTMLElement;
    reducedMotion: boolean;
    introDelay: number;
    startTime: number;
    cursor: Cursor;
    liveItems: Map<Element, LiveItem>;
    visibleItems: Set<LiveItem>;
    lastScrollY: number;
    scrollVelocity: number;
    scrollStretch: string;
    frameId: number;
};
