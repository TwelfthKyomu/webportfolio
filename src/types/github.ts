import { TechCategory } from "@/utils/techCategories";

export interface GithubRepository {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
	owner: {
		login: string;
		id: number;
		avatar_url: string;
	};
    homepage: string | null;
    topics: string[];
    language: string;
    created_at: string;
    updated_at: string;
    default_branch: string;
    dependencies?: {
        [key: string]: string;
    };
    categorizedTech?: {
        [K in TechCategory]: string[];
    };
	private: boolean;
	fork: boolean;
}

export type PackageJson = {
    dependencies?: { [key: string]: string };
    devDependencies?: { [key: string]: string };
}

export type GithubState = {
    repositories: GithubRepository[];
    isLoading: boolean;
    error: string | null;
    fetchRepositories: () => Promise<void>;
}
