export const techCategories = {
    'Технологии': [
        'react',
        'vue',
        'angular',
        'next',
        'typescript',
        'javascript',
        'node',
        'express',
        'nestjs'
    ],
    'Анимация': [
        'gsap',
        'framer-motion',
        'three',
        'anime',
        'motion',
        'animation'
    ],
    'Стилизация': [
        'sass',
        'scss',
        'styled-components',
        'tailwind',
        'css',
        'less'
    ],
    'Базы данных': [
        'mongodb',
        'postgresql',
        'mysql',
        'sqlite',
        'prisma',
        'sequelize',
        'mongoose'
    ],
    'Тестирование': [
        'jest',
        'testing-library',
        'cypress',
        'vitest',
        'mocha',
        'chai'
    ]
} as const;

export type TechCategory = keyof typeof techCategories;

export function categorizeTechnology(tech: string | null | undefined): TechCategory | null {
    if (!tech) return null;

    const lowercaseTech = tech.toLowerCase();

    for (const [category, technologies] of Object.entries(techCategories)) {
        if (technologies.some(t => lowercaseTech.includes(t))) {
            return category as TechCategory;
        }
    }

    return null;
}
