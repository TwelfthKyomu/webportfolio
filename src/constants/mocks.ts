export const MOCK_NAMES = ['admin', 'feed', 'dashboard', 'table', 'form'] as const;

export type MockName = (typeof MOCK_NAMES)[number];
