import { getProjects } from '@/lib/projects';

export function generateStaticParams() {
    return getProjects()
        .filter((project) => project.case)
        .map((project) => ({ slug: project.slug }));
}
