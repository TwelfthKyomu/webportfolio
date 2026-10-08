export const MOCK_NAMES = [
    'admin',
    'feed',
    'dashboard',
    'table',
    'form',
    'player',
    'shop',
] as const;

export type MockName = (typeof MOCK_NAMES)[number];
