import type * as z from 'zod';

import type { caseStudySchema, projectSchema, screenSchema } from './schema';

export type Screen = z.output<typeof screenSchema>;

export type CaseStudy = z.output<typeof caseStudySchema>;

export type Project = z.output<typeof projectSchema> & {
    slug: string;
};

export type ProjectLink = {
    href: string;
    label: string;
    external: boolean;
};

export type NextCaseLink = {
    href: string;
    kicker: string;
    title: string;
};

export type CasePageData = {
    project: Project;
    caseStudy: CaseStudy;
    number: number;
    worksCount: number;
    nextLink: NextCaseLink;
};
