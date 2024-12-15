import { create } from "zustand/index";

import { ProjectContextType } from "types/project";

export const projectStore = create<ProjectContextType>((set) => ({
	projects: {
		repositories: [],
		commercialProjects: []
	},
	isLoading: false,
	error: null,

	setProjects: (projects) => set({projects}),
	setLoading: (isLoading) => set({isLoading}),
	setError: (error) => set({error})
}));