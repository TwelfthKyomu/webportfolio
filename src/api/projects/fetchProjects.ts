import { CommercialProjectT, RawCommercialProjectT } from '@/types/project.types';

export async function fetchCommercialProjects(): Promise<CommercialProjectT[]> {
    const response = await fetch('/api/projects/commercial');

    if (!response.ok) {
        throw new Error('Failed to fetch commercial projects');
    }

    const data = await response.json() as RawCommercialProjectT[];

    return data.map((project) => ({
        ...project,
        technologies: Array.isArray(project.technologies)
            ? project.technologies
            : JSON.parse(project.technologies || '[]')
    }));
}
