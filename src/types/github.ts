export type RepositoryT = {
	id: number;
    name: string;
    description: string | null;
	html_url: string | null;
	language: string | null;
	source: 'github';
}

export type GithubRepositoriesContextType = {
	repositories: RepositoryT[];
	isLoading: boolean;
	error: string | null;

	setRepositories: (repositories: RepositoryT[]) => void;
	setLoading: (isLoading: boolean) => void;
	setError: (error: string | null) => void;
}
