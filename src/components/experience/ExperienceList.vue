<template lang="pug">
.ri-experience
  h1.ri-experience__title {{ t('experience.title') }}
  p.ri-experience__intro {{ t('experience.summary') }}
  ul.ri-experience__experiences
    li(v-for="experience in experiences", :key="experience.id", :class="{ 'ri-s-collapsed': isCollapsed(experience) }")
      ExperienceItem(:experience="experience", :collapsed="isCollapsed(experience)", @showAll="() => showAll()")
</template>

<script lang="ts">
import { ComputedRef, Ref, computed, defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";

import { Locale } from "../../i18n";

import { Experience, getExperienceList } from "./experience.data";
import ExperienceItem from "./ExperienceItem.vue";

export default defineComponent({
	name: "ExperienceList",
	components: {
		ExperienceItem,
	},
	setup() {
		const { t, locale } = useI18n();
		const collapsedAll: Ref<boolean> = ref(true);

		const experiences: ComputedRef<Experience[]> = computed(() =>
			getExperienceList(locale.value as Locale),
		);

		const showAll: () => void = () => (collapsedAll.value = false);
		const isCollapsed: (experience: Experience) => boolean = (
			experience: Experience,
		) => {
			return experience.collapsed && collapsedAll.value;
		};

		return { t, experiences, collapsedAll, showAll, isCollapsed };
	},
});
</script>

<style lang="stylus" scoped>
@import '../../style/variables'
@import '../../style/mixins';

.ri-experience
  ri-m-bodyMaxWidth()

  &__title
    ri-m-pageTitle()
    padding 2 * $ri-baseMargin 0 $ri-baseMargin 0

  &__intro
    ri-m-pageSubtitle()
    padding 0
    padding-bottom 4 * $ri-baseMargin

  &__experiences
    ri-m-unstyleList()

    > .ri-s-collapsed + .ri-s-collapsed
      display none
</style>
