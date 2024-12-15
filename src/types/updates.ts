export type UpdatesT = {
	id: number;
	name: string;
	description: string;
	technologies: string[];
	previewUrl?: string;
	imageUrl?: string;
	startDate: string;
	endDate?: string;
	role: string;
	company: string;
}