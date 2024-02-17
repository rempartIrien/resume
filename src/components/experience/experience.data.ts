import { I18nString, Locale } from "../../i18n";

import experiences from "./experiences.json";

export interface I18nExperience {
	id: string;
	dateString: I18nString;
	title: I18nString;
	role: I18nString;
	content: I18nString;
	tags: string[];
	inProgress: boolean;
	collapsed: boolean;
}

export interface Experience {
	id: string;
	dateString: string;
	title: string;
	role: string;
	content: string;
	tags: string[];
	inProgress: boolean;
	collapsed: boolean;
}

export function getExperienceList(locale: Locale): Experience[] {
	return (experiences as I18nExperience[]).map((exp) => {
		return {
			...exp,
			dateString: exp.dateString[locale],
			title: exp.title[locale],
			role: exp.role[locale],
			content: exp.content[locale],
		};
	});
}
