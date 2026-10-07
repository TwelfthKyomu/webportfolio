import { getSiteLink } from './getSiteLink';
import type { Project, ProjectLink } from './types';

export function getProjectLinks(project: Project): ProjectLink[] {
    const links: ProjectLink[] = [];

    if (project.case) {
        links.push({ href: `/cases/${project.slug}`, label: 'Смотреть кейс', external: false });
    }

    const siteLink = getSiteLink(project);

    if (siteLink) links.push(siteLink);

    return links;
}
