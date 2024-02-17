import { Ref, ref } from "vue";

import { Theme, darkTheme, lightTheme } from "./theme.util";

function setTheme(isDarkMode: Ref<boolean>): void {
	const theme: Theme = isDarkMode.value ? darkTheme : lightTheme;

	const doc: HTMLElement = document.documentElement;
	doc.style.setProperty("--color-primary", theme.primaryColor);
	doc.style.setProperty("--color-secondary", theme.secondaryColor);
	doc.style.setProperty("--color-tertiary", theme.tertiaryColor);
	doc.style.setProperty("--color-text", theme.textColor);
	doc.style.setProperty("--color-background", theme.backgroundColor);
}

const darkThemeMq: MediaQueryList = window.matchMedia(
	"(prefers-color-scheme: dark)",
);

const isDarkMode: Ref<boolean> = ref(darkThemeMq.matches);
setTheme(isDarkMode);

export function useTheme(): { isDarkMode: Ref<boolean>; toggle: () => void } {
	const toggle: () => void = () => {
		isDarkMode.value = !isDarkMode.value;
		setTheme(isDarkMode);
	};

	return { toggle, isDarkMode };
}
