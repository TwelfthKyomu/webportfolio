import { commercialProject, ProjectData } from "@/types/project";
import image1 from "assets/avatar.jpeg";

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

export const projectData: ProjectData = {
	title: "Веб-портфолио",
	subtitle: "Разработан на React",
	image: image1,
	technologies: [
		{
			name: "Технологии",
			items: ["React", "TypeScript", "Next.js", "SCSS"]
		},
		{
			name: "Базы данных",
			items: ["MongoDB", "Prisma"]
		},
		{
			name: "Анимация",
			items: ["Framer Motion", "GSAP"]
		}
	],
	githubLink: "https://github.com/TwelfthDannis/webportfolio",
	websiteLink: "/"
};