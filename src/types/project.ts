import { MenuItems } from "@/constants/menu";
import { RepositoryT } from "types/github";
import { CommercialProjectT } from "types/project.types";
import { UpdatesT } from "types/updates";

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