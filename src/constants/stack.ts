type TechnologyGroup = {
    title: string;
    technologies: string[];
};

export const CORE_STACK = [
    'TypeScript',
    'React',
    'Next.js',
    'TanStack Query',
    'PostgreSQL',
    'Drizzle',
];

export const STACK_GROUPS: TechnologyGroup[] = [
    {
        title: 'Данные и формы',
        technologies: [
            'TanStack Table',
            'React Hook Form',
            'Zod',
            'nuqs',
            'next-safe-action',
            'Apollo Client',
            'GraphQL',
            'io-ts',
        ],
    },
    {
        title: 'Сервер и база',
        technologies: ['better-auth', 'Resend', 'Hasura', 'Neon'],
    },
    {
        title: 'Интерфейс',
        technologies: [
            'Tailwind CSS',
            'shadcn/ui',
            'Radix UI',
            'CSS Modules',
            'Sass',
            'next-intl',
            'i18next',
        ],
    },
    {
        title: 'Качество и инструменты',
        technologies: [
            'Vitest',
            'Storybook',
            'Biome',
            'ESLint',
            'knip',
            'Sentry',
            'React Compiler',
            'Docker',
            'Bun',
        ],
    },
];

export const STACK_COUNT = STACK_GROUPS.reduce(
    (count, group) => count + group.technologies.length,
    CORE_STACK.length
);

export const LEARNING_NOW = 'React Native';
