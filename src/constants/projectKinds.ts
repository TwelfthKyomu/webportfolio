export const PROJECT_KINDS = ['commercial', 'personal'] as const;

export type ProjectKind = (typeof PROJECT_KINDS)[number];

export const PROJECT_KIND_LABELS: Record<ProjectKind, string> = {
    commercial: 'Коммерческий',
    personal: 'Личный',
};
