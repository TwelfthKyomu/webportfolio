import { getNextCaseLink } from './getNextCaseLink';
import { getProjects } from './getProjects';
import type { CasePageData } from './types';

export function getCasePage(slug: string): CasePageData | undefined {
    const projects = getProjects();
    const project = projects.find((item) => item.slug === slug);

    if (!project?.case) return undefined;

    return {
        project,
        caseStudy: project.case,
        number: projects.indexOf(project) + 1,
        worksCount: projects.length,
        nextLink: getNextCaseLink(project, projects),
    };
}
