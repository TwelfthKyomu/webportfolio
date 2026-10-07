import type { Project, ProjectLink } from './types';

export function getSiteLink(project: Project): ProjectLink | undefined {
    if (!project.url) return undefined;

    return { href: project.url, label: 'Попробовать', external: true };
}
