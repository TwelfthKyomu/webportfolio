import { ignoredDependencies, techCategories, TechCategory } from "@/constants/techCategories";

export function categorizeTechnology(tech: string | null | undefined): TechCategory | null {
	if (!tech) return null;

	const lowercaseTech = tech.toLowerCase();

	if (ignoredDependencies.some(dep => lowercaseTech.includes(dep))) {
		return null;
	}

	for (const [category, technologies] of Object.entries(techCategories)) {
		if (technologies.some(t => lowercaseTech.includes(t))) {
			return category as TechCategory;
		}
	}

	return null;
}