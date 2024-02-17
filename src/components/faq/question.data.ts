import { I18nString, Locale } from "../../i18n";

import questions from "./questions.json";

export interface I18nQuestion {
	id: string;
	question: I18nString;
	answer: I18nString;
}

export interface Question {
	id: string;
	question: string;
	answer: string;
}

export function getQuestionList(locale: Locale): Question[] {
	return (questions as I18nQuestion[]).map((question) => {
		return {
			...question,
			question: question.question[locale],
			answer: question.answer[locale],
		};
	});
}
