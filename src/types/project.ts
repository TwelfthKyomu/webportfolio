import type { MenuItems } from "@/constants/menu";
import type { UpdatesT } from "types/updates";

export type RepositoryT = {
    id: number;
    name: string;
    description: string | null;
    htmlUrl: string | null;
    language: string | null;
    source: 'github';
    imagePath: string | null;
    technologies: string[];
    createdAt: Date;
    updatedAt: Date;
}

export type ProjectT = {
    repositories: RepositoryT[];
    commercialProjects: CommercialProjectT[];
	updates: UpdatesT[];
}

export type ProjectContextType = {
    projects: ProjectT;
    isLoading: boolean;
    error: string | null;
	currentFilter: MenuItems;
	handleFilterChange: (filterId: MenuItems) => void;
	filteredProjects: (RepositoryT | CommercialProjectT | UpdatesT)[];
};

export type CommercialProjectT = {
    id: number;
    name: string;
    description: string;
    imagePath: string | null;
    technologies: string[];
    htmlUrl?: string;
    createdAt: Date;
    updatedAt: Date;
}