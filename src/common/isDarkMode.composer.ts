import { Ref, ref } from "vue";

export const darkThemeMq: MediaQueryList = window.matchMedia(
	"(prefers-color-scheme: dark)",
);
const isDarkMode: Ref<boolean> = ref(darkThemeMq.matches);

export function useIsDarkMode(): { isDarkMode: Ref<boolean> } {
	return { isDarkMode };
}
