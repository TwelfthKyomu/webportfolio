import { commercialProject } from "@/types/project";

const commercialProjects: commercialProject[] = [
	{
		id: 1,
		name: "Проект 1",
		role: "full-development",
		tasks: [
			"Разработка с нуля",
			"Интеграция API",
			"Оптимизация производительности"
		],
		technologies: ["React", "TypeScript", "Redux"],
		period: {
			start: "2023-01",
			end: "2023-06"
		}
	},
];