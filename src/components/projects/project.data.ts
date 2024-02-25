import { I18nMarkdown, Locale } from "../../i18n";

import projects from "./projects.json";

export interface I18nProject {
	id: string;
	name: string;
	projectUrl: string;
	imageUrl: { light: string; dark: string };
	repoUrl: string;
	description: I18nMarkdown;
	challenges: I18nMarkdown;
	tags: string[];
}

export type Project = Omit<I18nProject, "description" | "challenges"> & {
	description: string;
	challenges: string;
};

export function getProjectList(locale: Locale): Project[] {
	return (projects satisfies I18nProject[]).map((project) => {
		return {
			...project,
			description: JSON.parse(project.description[locale]),
			challenges: JSON.parse(project.challenges[locale]),
		};
	});
}
