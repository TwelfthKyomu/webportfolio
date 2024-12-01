import { StaticImageData } from "next/image";

export type commercialProject = {
	id: number;
	name: string;
	role: "full-development" | "partial-participation";
	tasks: string[];
	technologies: string[];
	period: {
		start: string;
		end: string;
	};
}

export type Technology = {
	name: string;
	items: string[];
}

export type ProjectData = {
	title: string;
	subtitle: string;
	image: StaticImageData;
	technologies?: Technology[];
	githubLink?: string;
	websiteLink?: string;
}
