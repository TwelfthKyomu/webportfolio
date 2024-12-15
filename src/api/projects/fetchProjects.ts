import { CommercialProjectT } from '@/types/project.types';

export async function fetchCommercialProjects(): Promise<CommercialProjectT[]> {
    const response = await fetch('/api/projects/commercial');
    if (!response.ok) {
        throw new Error('Failed to fetch commercial projects');
    }
    
    const data = await response.json();
    
    return data.map((project: any) => ({
        ...project,
        technologies: typeof project.technologies === 'string' 
            ? JSON.parse(project.technologies) 
            : project.technologies
    }));
}
