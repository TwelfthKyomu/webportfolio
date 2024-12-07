import { create } from "zustand/index";

import { GithubRepositoriesContextType } from '@/types/github';

export const githubRepositoriesStore = create<GithubRepositoriesContextType>((set) => ({
	repositories: [],
	isLoading: false,
	error: null,

	setRepositories: (repositories) => set({ repositories }),
	setLoading: (isLoading) => set({ isLoading }),
	setError: (error) => set({ error })
}));