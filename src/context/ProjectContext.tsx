"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback, useMemo } from 'react';
import { useQuery } from 'react-query';

import { fetchGithubRepository } from "@/api/github/fetchGithub";
import { repositoryT } from '@/types/github';
import { ProjectContextType, projectT, CommercialProjectT } from '@/types/project';

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
	const [projects, setProjects] = useState<projectT>({ repositories: [], commercialProjects: [] });
	const [currentFilter, setCurrentFilter] = useState<string>('all');
	const [isLoading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	// Получение GitHub проектов
	const { data: githubProjects, isLoading: isLoadingGithub, error: githubError } = useQuery<repositoryT[]>(
		'githubProjects',
		fetchGithubRepository,
		{ retry: 1, onError: (err) => setError(err instanceof Error ? err.message : 'Failed to fetch GitHub projects') }
	);

	// Получение коммерческих проектов
	const { data: commercialProjects, isLoading: isLoadingCommercial, error: commercialError } = useQuery<CommercialProjectT[]>(
		'commercialProjects',
		async () => [],
		{
			retry: 1,
			onError: (err) =>
				setError(err instanceof Error ? err.message : 'Failed to fetch commercial projects')
		}
	);

	useEffect(() => {
		setLoading(isLoadingGithub || isLoadingCommercial);
	}, [isLoadingGithub, isLoadingCommercial]);

	useEffect(() => {
		setProjects({
			repositories: githubProjects?.map(repo => ({ ...repo, source: 'github' })) || [],
			commercialProjects: commercialProjects || []
		});
	}, [githubProjects, commercialProjects]);

	const getAllProjects = useCallback(() => [
		...projects.repositories,
		...projects.commercialProjects
	], [projects]);

	const getMyProjects = useCallback(() => (
		projects.repositories
	), [projects]);

	const getCommercialProjects = useCallback(() => (
		projects.commercialProjects
	), [projects]);

	const getUpdates = useCallback(() => {
		const thirtyDaysAgo = new Date();

		thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

		return getAllProjects().filter(project =>
			'endDate' in project ? new Date(project.endDate || '') >= thirtyDaysAgo : true
		);
	}, [getAllProjects]);

	const getFilteredProjects = useCallback(() => {
		switch (currentFilter) {
			case 'personal':
				return getMyProjects();
			case 'commercial':
				return getCommercialProjects();
			case 'updates':
				return getUpdates();
			default:
				return getAllProjects();
		}
	}, [currentFilter, getAllProjects, getMyProjects, getCommercialProjects, getUpdates]);

	const filterProjects = useCallback(setCurrentFilter, []);

	const contextValue = useMemo(() => ({
		projects,
		isLoading,
		error,
		currentFilter,
		setProjects,
		setLoading,
		setError,
		getAllProjects,
		getMyProjects,
		getCommercialProjects,
		getUpdates,
		getFilteredProjects,
		filterProjects,
	}), [
		projects,
		isLoading,
		error,
		currentFilter,
		getAllProjects,
		getMyProjects,
		getCommercialProjects,
		getUpdates,
		getFilteredProjects,
		filterProjects
	]);

	return (
		<ProjectContext.Provider value={ contextValue }>
			{ children }
		</ProjectContext.Provider>
	);
};

export const useProjectContext = () => {
	const context = useContext(ProjectContext);

	if (!context) {
		throw new Error('useProjectContext must be used within a ProjectProvider');
	}

	return context;
};