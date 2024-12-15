export type CommercialProjectT = {
	id: number;
	name: string;
	description: string;
	imagePath: string | null;
	technologies: string[];
	htmlUrl?: string;
	createdAt: Date;
	updatedAt: Date;
}

export type RawCommercialProjectT = Omit<CommercialProjectT, 'technologies'> & {
	technologies: string | string[];
}

export type CreateCommercialProjectDTO = {
	name: string;
	description: string;
	technologies: string[];
	htmlUrl?: string;
	image?: File | null;
}
