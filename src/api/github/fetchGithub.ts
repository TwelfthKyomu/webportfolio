import { GITHUB_HEADER, GITHUB_REPOSITORY_API } from "@/constants/github";
import { RepositoryT } from "@/types/github";

export const fetchGithubRepository = async () => {
	const response = await fetch(GITHUB_REPOSITORY_API, {headers: GITHUB_HEADER});
	const data = await response.json();

	return data
		.map((repo: RepositoryT) => ({
			id: repo.id,
			name: repo.name,
			language: repo.language,
			html_url: repo.html_url,
			description: repo.description,
		}))
		.filter((repo: RepositoryT) => repo.language);
};