import { create } from 'zustand';

import { TechCategory } from '@/constants/techCategories';
import { isValidRepository } from "@/lib/validation";
import { GithubRepository, GithubState, PackageJson } from '@/types/github';
import { categorizeTechnology } from "@/utils/categorizeTechnology";

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_USERNAME = 'TwelfthDannis';

const githubApiHeaders = {
	Accept: 'application/vnd.github.v3+json',
	...(GITHUB_TOKEN && {Authorization: `token ${GITHUB_TOKEN}`}),
};

const fetchGithubData = async (apiUrl: string) => {
	const response = await fetch(apiUrl, {headers: githubApiHeaders});

	if (!response.ok) throw new globalThis.Error(response.statusText);

	return response.json();
};

const buildRepoUrl = (repository: GithubRepository, path: string) =>
	`${GITHUB_API_BASE}/repos/${repository.owner.login}/${repository.name}/${path}`;

const fetchPackageJson = async (repository: GithubRepository): Promise<PackageJson | null> => {
	try {
		const packageJsonPath = `contents/package.json?ref=${repository.default_branch}`;
		const {content} = await fetchGithubData(buildRepoUrl(repository, packageJsonPath));

		return JSON.parse(Buffer.from(content, 'base64').toString('utf-8'));
	} catch (error) {
		if ((error as globalThis.Error).message.includes('404')) return null;
		throw error;
	}
};

const categorizeTechnologies = (repository: GithubRepository): Record<TechCategory, string[]> => {
	const categorizeItems = (technologiesList: string[]) =>
		technologiesList.reduce((categorizedTech, technology) => {
			const techCategory = categorizeTechnology(technology);

			if (techCategory) {
				(categorizedTech[techCategory] ||= []).push(technology);
			}

			return categorizedTech;
		}, {} as Record<TechCategory, string[]>);

	return {
		...categorizeItems([repository.language || '']),
		...categorizeItems(Object.keys(repository.dependencies || {})),
		...categorizeItems(repository.topics || []),
	};
};

const enrichRepositoryData = async (repository: GithubRepository) => {
	const packageJson = await fetchPackageJson(repository);
	const dependencies = packageJson
		? {...packageJson.dependencies, ...packageJson.devDependencies}
		: undefined;

	return {
		...repository,
		dependencies,
		categorizedTech: categorizeTechnologies({...repository, dependencies})
	};
};

export const useGithubStore = create<GithubState>((set, get) => ({
	repositories: [],
	isLoading: false,
	error: null,

	fetchRepositories: async () => {
		if (get().repositories.length > 0 || get().isLoading) {
			return;
		}

		set({isLoading: true, error: null});
		try {
			const reposPath = `users/${GITHUB_USERNAME}/repos?type=owner&sort=updated&per_page=100`;
			const allRepositories = await fetchGithubData(`${GITHUB_API_BASE}/${reposPath}`);
			const validRepositories = allRepositories.filter(isValidRepository);
			const enrichedRepositories = await Promise.all(validRepositories.map(enrichRepositoryData));
			const sortedRepositories = enrichedRepositories.sort(
				(a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
			);

			set({repositories: sortedRepositories, isLoading: false});
		} catch (error) {
			set({error: (error as globalThis.Error).message || 'An error occurred', isLoading: false});
		}
	},
}));