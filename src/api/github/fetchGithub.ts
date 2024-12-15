import { GITHUB_HEADER, GITHUB_REPOSITORY_API } from "@/constants/github";
import { RawGithubRepositoryT, RepositoryT } from "@/types/github";

export const fetchGithubRepository = async () => {
	const response = await fetch(GITHUB_REPOSITORY_API, {headers: GITHUB_HEADER});
	const data = await response.json();

	return data
		.map((repo: RawGithubRepositoryT) => ({
			id: repo.id,
			name: repo.name,
			language: repo.language,
			htmlUrl: repo.html_url,
			description: repo.description,
			imagePath: null
		}))
		.filter((repo: RepositoryT) => repo.language);
};