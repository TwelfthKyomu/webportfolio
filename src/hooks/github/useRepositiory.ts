import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { fetchGithubRepository } from "@/api/github/fetchGithub";
import { githubRepositoriesStore } from "@/store/githubStore";
import { repositoryT } from "@/types/github";

export const useRepository = () => {
	const {setRepositories} = githubRepositoriesStore();
	const {data, isLoading, error, refetch} = useQuery<repositoryT[] | undefined>({
		queryFn: fetchGithubRepository,
		retry: 1,
	});

	useEffect(() => {
		if (data && !error) {
			setRepositories(data);
		}
	}, [data, error]);

	return {
		repositories: data || [],
		isLoading,
		error,
		fetchRepositories: refetch,
	};
};