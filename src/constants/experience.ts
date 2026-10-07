type ExperienceItem = {
    from: string;
    to: string;
    company: string;
    role: string;
    description: string;
    stack?: string;
};

export const EXPERIENCE: ExperienceItem[] = [
    {
        from: '2024',
        to: 'сейчас',
        company: 'Агентство веб-разработки',
        role: 'Frontend-разработчик',
        description: 'Интерфейсы для проектов заказчиков: админ-панели и клиентские приложения.',
        stack: 'TypeScript · React · GraphQL',
    },
    {
        from: '2026',
        to: 'сейчас',
        company: 'Свои проекты',
        role: 'Fullstack-разработчик',
        description:
            'Flowsy — админ-панель для бизнеса, интернет-магазин errorBrand на её API и мобильное приложение для Flowsy.',
        stack: 'Next.js · PostgreSQL · Drizzle · better-auth',
    },
];
