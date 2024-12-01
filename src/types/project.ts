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