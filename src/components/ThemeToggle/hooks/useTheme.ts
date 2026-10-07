import { useSyncExternalStore } from 'react';

import { isDarkTheme, subscribeToTheme, toggleTheme } from '../lib/theme';

export function useTheme() {
    const isDark = useSyncExternalStore(subscribeToTheme, isDarkTheme, () => false);

    return { isDark, toggleTheme };
}
