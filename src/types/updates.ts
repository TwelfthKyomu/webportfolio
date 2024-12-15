export type UpdatesT = {
	id: number;
	name: string;
	description: string;
	technologies: string[];
	previewUrl?: string;
	imagePath?: string;
	startDate: string;
	endDate?: string;
	role: string;
	company: string;
	htmlUrl?: string;
}