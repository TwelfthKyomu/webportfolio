import { GithubRepository } from "@/types/github";

export const isValidRepository = (repository: GithubRepository) =>
	!repository.fork &&
	!repository.private &&
	repository.language !== null &&
	repository.name !== '.github';