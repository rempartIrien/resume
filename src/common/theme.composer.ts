import { Ref, ref } from 'vue';

import { Theme, darkTheme, lightTheme } from './theme.util';

const isDarkMode: Ref<boolean> = ref(false);

export function useTheme(): { isDarkMode: Ref<boolean>; toggle: () => void } {
  const toggle: () => void = () => {
    isDarkMode.value = !isDarkMode.value;
    const theme: Theme = isDarkMode.value ? darkTheme : lightTheme;

    const doc: HTMLElement = document.documentElement;
    doc.style.setProperty('--color-primary', theme.primaryColor);
    doc.style.setProperty('--color-secondary', theme.secondaryColor);
    doc.style.setProperty('--color-tertiary', theme.tertiaryColor);
    doc.style.setProperty('--color-text', theme.textColor);
    doc.style.setProperty('--color-background', theme.backgroundColor);
  };

  return { toggle, isDarkMode };
}
