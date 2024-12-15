import { repositoryT } from "types/github";

export type CommercialProjectT = {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    previewUrl?: string;
    imageUrl?: string;
    startDate: string;
    endDate?: string;
    role: string;
    company: string;
};

export type projectT = {
    repositories: repositoryT[];
    commercialProjects: CommercialProjectT[];
}

export type ProjectContextType = {
    projects: projectT;
    isLoading: boolean;
    error: string | null;
    currentFilter: string;

    setProjects: (projects: projectT) => void;
    setLoading: (isLoading: boolean) => void;
    setError: (error: string | null) => void;

    getAllProjects: () => (repositoryT | CommercialProjectT)[];
    getMyProjects: () => repositoryT[];
    getCommercialProjects: () => CommercialProjectT[];
    getUpdates: () => (repositoryT | CommercialProjectT)[];
    getFilteredProjects: () => (repositoryT | CommercialProjectT)[];
    filterProjects: (filter: string) => void;
}