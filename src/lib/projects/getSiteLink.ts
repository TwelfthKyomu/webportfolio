import type { Project, ProjectLink } from './types';

export function getSiteLink(project: Project): ProjectLink | undefined {
    if (!project.url) return undefined;

    return { href: project.url, label: project.urlLabel ?? 'Попробовать', external: true };
}
