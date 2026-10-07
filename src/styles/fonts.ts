import { Golos_Text, Martian_Mono, Unbounded } from 'next/font/google';

export const displayFont = Unbounded({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-display',
    fallback: ['Helvetica Neue', 'system-ui', 'sans-serif'],
});

export const bodyFont = Golos_Text({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-body',
    fallback: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
});

export const monoFont = Martian_Mono({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-mono',
    fallback: ['ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
});
