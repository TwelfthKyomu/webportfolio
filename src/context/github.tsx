'use client';
import { createContext, ReactNode, useContext, useEffect } from 'react';

import { useGithubStore } from '@/store/github';
import { GithubContextType } from "@/types/github";

const GithubContext = createContext<GithubContextType>({
	repositories: [],
	isLoading: false,
	error: null,
});

export const GithubProvider = ({ children }: { children: ReactNode }) => {
    const { repositories, isLoading, error, fetchRepositories } = useGithubStore();

	useEffect(() => {
		if (repositories.length === 0) {
			fetchRepositories()
			.then(r => r)
			.catch(err => globalThis.Error(err));
		}

		return () => {};
	}, [fetchRepositories, repositories]);

    return (
        <GithubContext.Provider value={ { repositories, isLoading, error } }>
            { children }
        </GithubContext.Provider>
    );
};

export const useGithub = () => {
    const context = useContext(GithubContext);

    if (!context) {
        throw new globalThis.Error('useGithub must be used within a GithubProvider');
    }

    return context;
};
