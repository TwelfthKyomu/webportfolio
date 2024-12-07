import { Repository } from "@/types/github";

export const isValidRepository = (repository: Repository) =>
	!repository.fork &&
	!repository.private &&
	repository.language !== null &&
	repository.name !== '.github';