import { I18nString, Locale } from "../../i18n";

import questions from "./questions.json";

interface I18nQuestion {
	id: string;
	question: I18nString;
	answer: I18nString;
}

export type Question = Omit<I18nQuestion, "question" | "answer"> & {
	question: string;
	answer: string;
};

export function getQuestionList(locale: Locale): Question[] {
	return (questions satisfies I18nQuestion[]).map((question) => {
		return {
			...question,
			question: question.question[locale],
			answer: question.answer[locale],
		};
	});
}
