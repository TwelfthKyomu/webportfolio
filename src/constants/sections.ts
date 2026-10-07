export const SECTIONS = [
    { id: 'works', label: 'Работы' },
    { id: 'experience', label: 'Опыт' },
    { id: 'approach', label: 'Подход' },
    { id: 'stack', label: 'Стек' },
    { id: 'contact', label: 'Контакты' },
] as const;

export type SectionId = (typeof SECTIONS)[number]['id'];
