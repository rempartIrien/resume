<template lang="pug">
div
  button.ri-themeSwitcher(@click="() => toggle()", :title="t('theme.switch_theme')")
    span.ri-themeSwitcher__icon(:class="{ 'ri-s-active': !isDarkMode }")
      span.ri-themeSwitcher__sun
    span.ri-themeSwitcher__icon(:class="{ 'ri-s-active': isDarkMode }")
      span.ri-themeSwitcher__moon
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

import { darkThemeMq, useIsDarkMode } from "./isDarkMode.composer";
import { Theme, darkTheme, lightTheme } from "./theme.util";

function setTheme(isDarkMode: boolean): void {
	const theme: Theme = isDarkMode ? darkTheme : lightTheme;

	const doc: HTMLElement = document.documentElement;
	doc.style.setProperty("--color-primary", theme.primaryColor);
	doc.style.setProperty("--color-secondary", theme.secondaryColor);
	doc.style.setProperty("--color-tertiary", theme.tertiaryColor);
	doc.style.setProperty("--color-text", theme.textColor);
	doc.style.setProperty("--color-background", theme.backgroundColor);
}

export default defineComponent({
	name: "ThemeSwitcher",
	setup() {
		const { isDarkMode } = useIsDarkMode();
		const { t } = useI18n();

		const onColorSchemeChange: (event: MediaQueryListEvent) => void = (e) => {
			isDarkMode.value = e.matches;
			setTheme(isDarkMode.value);
		};

		const removeEventHandler: () => void = () => {
			darkThemeMq.removeEventListener("change", onColorSchemeChange);
		};

		onMounted(() => {
			setTheme(isDarkMode.value);
			darkThemeMq.addEventListener("change", onColorSchemeChange);
		});

		onUnmounted(() => {
			removeEventHandler();
		});

		const toggle: () => void = () => {
			isDarkMode.value = !isDarkMode.value;
			setTheme(isDarkMode.value);
			// Once we toggle the button, we don't want the system to override
			// the setting.
			removeEventHandler();
		};

		return { t, toggle, isDarkMode };
	},
});
</script>

<style lang="stylus" scoped>
@import '../style/variables'
@import '../style/mixins'

$ri-themeSwitcher-iconSize = 2rem

.ri-themeSwitcher
  ri-m-buttonReset()
  font-size $ri-fontSize
  background var(--color-background)
  box-shadow inset 0 0 0 2px var(--color-secondary)
  display flex
  align-items center
  border-radius 4rem

  &__icon
    border-radius 50%
    width 3rem
    height 3rem
    border 2px solid transparent
    display flex
    align-items center
    justify-content center

    &.ri-s-active
      background var(--color-secondary)
      border-color var(--color-secondary)

      .ri-themeSwitcher__moon,
      .ri-themeSwitcher__sun
        background-color var(--color-background)

  &__moon,
  &__sun
    display block

  &__moon
    ri-m-icon(
      '/assets/icons/dark_mode.svg',
      $ri-themeSwitcher-iconSize,
      $ri-themeSwitcher-iconSize,
      var(--color-text)
    )

  &__sun
    display block
    ri-m-icon(
      '/assets/icons/light_mode.svg',
      $ri-themeSwitcher-iconSize,
      $ri-themeSwitcher-iconSize,
      var(--color-text)
    )
</style>
