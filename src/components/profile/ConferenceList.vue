<template lang="pug">
.ri-conferences
  ul.ri-conferences__list
    li.ri-conferences__item
      a.ri-conferences__logoContainer(href="http://dotjs.io")
        img.ri-conferences__logo(:src="dotJsLogoUrl", :alt="t('profile.conferences.dotjs.logo')")
      ul.ri-conferences__caption
        li {{ t('profile.conferences.dotjs.2017') }}
        li {{ t('profile.conferences.dotjs.2018') }}
    li.ri-conferences__item
      a.ri-conferences__logoContainer(href="http://dotcss.io")
        img.ri-conferences__logo(:src="dotCssLogoUrl", :alt="t('profile.conferences.dotcss.logo')")
      ul.ri-conferences__caption
        li {{ t('profile.conferences.dotcss.2017') }}
        li {{ t('profile.conferences.dotcss.2018') }}
</template>

<script lang="ts">
import { ComputedRef, computed, defineComponent } from "vue";
import { useI18n } from "vue-i18n";

import { useIsDarkMode } from "../../common/isDarkMode.composer";

export default defineComponent({
	name: "ConferenceList",
	setup() {
		const { t } = useI18n();
		const { isDarkMode } = useIsDarkMode();
		const dotCssLogoUrl: ComputedRef<string> = computed(() =>
			isDarkMode.value
				? "/assets/logos/logo-dotcss-dark.png"
				: "/assets/logos/logo-dotcss-light.png",
		);
		const dotJsLogoUrl: ComputedRef<string> = computed(() =>
			isDarkMode.value
				? "/assets/logos/logo-dotjs-dark.png"
				: "/assets/logos/logo-dotjs-light.png",
		);
		return { t, dotCssLogoUrl, dotJsLogoUrl };
	},
});
</script>

<style lang="stylus" scoped>
@import '../../style/variables'
@import '../../style/mixins'

.ri-conferences
  &__intro
    ri-m-subtitleText(var(--color-tertiary))

  &__list,
  &__caption
    ri-m-unstyleList()

  &__list
    text-align center
    @media screen and (min-width: $ri-breakpoint-minLarge)
      padding 4 * $ri-baseMargin 0
      display flex

  &__item
    flex 1
    display inline-block
    text-align center
    & + &
      padding 2 * $ri-baseMargin
      padding-bottom 0
      @media screen and (min-width: $ri-breakpoint-minLarge)
        padding 0

  &__logo
    height 4 * $ri-baseMargin

    @media screen and (min-width: $ri-breakpoint-minLarge)
      height 6 * $ri-baseMargin
</style>
