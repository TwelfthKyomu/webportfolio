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

export const ignoredDependencies = [
	'@types',
	'eslint',
	'prettier',
	'husky',
	'lint',
	'config',
	'tsconfig',
	'types',
	'devDependencies',
	'webpack',
	'babel',
	'package',
	'nodemon'
];
