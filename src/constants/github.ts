export const GITHUB_TOKEN = process.env.NEXT_PRIVATE_GITHUB_TOKEN;
export const GITHUB_API_BASE = 'https://api.github.com';
export const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

export const GITHUB_HEADER = {
	Accept: 'application/vnd.github.v3+json',
	...(GITHUB_TOKEN && {Authorization: `token ${GITHUB_TOKEN}`}),
};

export const GITHUB_REPOSITORY_API = `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?per_page=10`;