export type repositoryT = {
	id: number;
    name: string;
    description: string | null;
	html_url: string | null;
	language: string | null;
	source: 'github';
}

export type GithubRepositoriesContextType = {
	repositories: repositoryT[];
	isLoading: boolean;
	error: string | null;

	setRepositories: (repositories: repositoryT[]) => void;
	setLoading: (isLoading: boolean) => void;
	setError: (error: string | null) => void;
}
