'use client';
import { createContext, ReactNode, useContext, useEffect } from 'react';

import { useGithubStore } from '@/store/github';
import { GithubRepository } from '@/types/github';

type GithubContextType = {
    repositories: GithubRepository[];
    isLoading: boolean;
    error: string | null;
};

const GithubContext = createContext<GithubContextType>({
    repositories: [],
    isLoading: false,
    error: null,
});

export const GithubProvider = ({ children }: { children: ReactNode }) => {
    const { repositories, isLoading, error, fetchRepositories } = useGithubStore();

    useEffect(() => {
        fetchRepositories();
    }, [fetchRepositories]);

    return (
        <GithubContext.Provider value={{ repositories, isLoading, error }}>
            {children}
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
