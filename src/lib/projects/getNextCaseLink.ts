import { pluralize, toTwoDigits } from '@/lib/format';

import type { NextCaseLink, Project } from './types';

const WORK_FORMS = { one: 'работа', few: 'работы', many: 'работ' };

export function getNextCaseLink(project: Project, projects: Project[]): NextCaseLink {
    const caseProjects = projects.filter((item) => item.case);
    const nextProject = caseProjects[(caseProjects.indexOf(project) + 1) % caseProjects.length];

    if (nextProject === project) {
        return {
            href: '/#works',
            kicker: `${projects.length} ${pluralize(projects.length, WORK_FORMS)}`,
            title: 'Все работы',
        };
    }

    return {
        href: `/cases/${nextProject.slug}`,
        kicker: `Кейс ${toTwoDigits(projects.indexOf(nextProject) + 1)}`,
        title: nextProject.title,
    };
}
