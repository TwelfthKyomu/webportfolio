"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import { fetchGithubRepository } from "@/api/github/fetchGithub";
import { MenuItems } from "@/constants/menu";
import { RepositoryT } from '@/types/github';
import { ChildrenProps } from "types/chldrenProps";
import { ProjectContextType, ProjectT } from "types/project";
import { CommercialProjectT } from "types/project.types";
import { UpdatesT } from "types/updates";

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = (props:ChildrenProps) => {
	const { children } = props;
	const [projects, setProjects] = useState<ProjectT>({repositories: [], commercialProjects: [], updates: []});
	const [currentFilter, setCurrentFilter] = useState<MenuItems>(MenuItems.All);
	const [isLoading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const {data: githubProjects, isLoading: isLoadingGithub} = useQuery<RepositoryT[]>(
		'githubProjects',
		fetchGithubRepository,
		{
			retry: 1,
			staleTime: 5 * 60 * 1000,
			onError: (err) => setError(err instanceof Error ? err.message : 'Failed to fetch GitHub projects')
		}
	);

	const {data: commercialProjects, isLoading: isLoadingCommercial} = useQuery<CommercialProjectT[]>(
		'commercialProjects',
		async () => [],
		{
			retry: 1,
			staleTime: 5 * 60 * 1000,
			onError: (err) => setError(err instanceof Error ? err.message : 'Failed to fetch commercial projects')
		}
	);

	const {data: updates, isLoading: isLoadingUpdates} = useQuery<UpdatesT[]>(
		'updates',
		async () => [],
		{
			retry: 1,
			staleTime: 5 * 60 * 1000,
			onError: (err) => setError(err instanceof Error ? err.message : 'Failed to fetch updates')
		}
	);

	const handleFilterChange = (filterId: MenuItems) => {
		setCurrentFilter(filterId);
	};

	useEffect(() => {
		if (!isLoadingGithub && !isLoadingCommercial && !isLoadingUpdates) {
			setLoading(false);
		}
	}, [isLoadingGithub, isLoadingCommercial, isLoadingUpdates]);

	useEffect(() => {
		if (githubProjects || commercialProjects) {
			setProjects({
				repositories: githubProjects || [],
				commercialProjects: commercialProjects || [],
				updates: updates || []
			});
		}
	}, [githubProjects, commercialProjects, updates]);

	const filteredProjects = useMemo(() => {
		switch (currentFilter) {
			case MenuItems.Personal:
				return projects.repositories;
			case MenuItems.Commercial:
				return projects.commercialProjects;
			case MenuItems.Updates:
				return projects.updates;
			default:
				return [
					...projects.repositories,
					...projects.commercialProjects
				];
		}
	},[currentFilter, projects]);

	const contextValue = useMemo(() => ({
		projects,
		isLoading,
		error,
		currentFilter,
		handleFilterChange,
		filteredProjects
	}), [
		projects,
		isLoading,
		error,
		currentFilter,
		handleFilterChange,
		filteredProjects
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