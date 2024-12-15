"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useQueries } from 'react-query';

import { fetchGithubRepository } from "@/api/github/fetchGithub";
import { fetchCommercialProjects } from '@/api/projects/fetchProjects';
import { MenuItems } from "@/constants/menu";
import { ChildrenProps } from "types/chldrenProps";
import { ProjectContextType, ProjectT } from "types/project";

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = (props:ChildrenProps) => {
	const { children } = props;
	const [projects, setProjects] = useState<ProjectT>({repositories: [], commercialProjects: [], updates: []});
	const [currentFilter, setCurrentFilter] = useState<MenuItems>(MenuItems.All);
	const [error, setError] = useState<string | null>(null);

	const queries = useQueries([
		{
			queryKey: ['githubProjects'],
			queryFn: fetchGithubRepository,
			retry: 1,
			staleTime: 5 * 60 * 1000,
			onError: (err: unknown) => setError(err instanceof Error ? err.message : 'Failed to fetch GitHub projects')
		},
		{
			queryKey: ['commercialProjects'],
			queryFn: fetchCommercialProjects,
			retry: 1,
			staleTime: 5 * 60 * 1000,
			onError: (err: unknown) =>
				setError(err instanceof Error ? err.message : 'Failed to fetch commercial projects')
		},
		{
			queryKey: ['updates'],
			queryFn: async () => [],
			retry: 1,
			staleTime: 5 * 60 * 1000,
			onError: (err: unknown) => setError(err instanceof Error ? err.message : 'Failed to fetch updates')
		}
	]);

	const isLoading = queries.some(query => query.isLoading);
	const [githubQuery, commercialQuery, updatesQuery] = queries;

	const handleFilterChange = (filterId: MenuItems) => {
		setCurrentFilter(filterId);
	};

	useEffect(() => {
		if (!isLoading) {
			setProjects({
				repositories: githubQuery.data || [],
				commercialProjects: commercialQuery.data || [],
				updates: updatesQuery.data || []
			});
		}
	}, [githubQuery.data, commercialQuery.data, updatesQuery.data, isLoading]);

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