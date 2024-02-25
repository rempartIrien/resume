import { I18nString, Locale } from "../../i18n";

import experiences from "./experiences.json";

interface I18nExperience {
	id: string;
	dateString: I18nString;
	title: I18nString;
	role: I18nString;
	content: I18nString;
	tags: string[];
	inProgress: boolean;
	collapsed: boolean;
}

export type Experience = Omit<
	I18nExperience,
	"dateString" | "title" | "role" | "content"
> & {
	dateString: string;
	title: string;
	role: string;
	content: string;
};

export function getExperienceList(locale: Locale): Experience[] {
	return (experiences satisfies I18nExperience[]).map((exp) => {
		return {
			...exp,
			dateString: exp.dateString[locale],
			title: exp.title[locale],
			role: exp.role[locale],
			content: exp.content[locale],
		};
	});
}
