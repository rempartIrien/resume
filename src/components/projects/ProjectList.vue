<template lang="pug">
section.ri-projects
	h1.ri-projects__title {{ t('projects.title') }}
	p.ri-projects__intro {{ t('projects.summary') }}
	ol.ri-projects__list
		li.ri-projects__item(v-for="project in projects", :key="project.id")
			ProjectItem(:project="project")
</template>
<script lang="ts">
import { ComputedRef, computed, defineComponent } from "vue";
import { useI18n } from "vue-i18n";

import { Locale } from "../../i18n";

import { Project, getProjectList } from "./project.data";
import ProjectItem from "./ProjectItem.vue";

export default defineComponent({
	name: "ProjectList",
	components: { ProjectItem },
	setup() {
		const { t, locale } = useI18n();
		const projects: ComputedRef<Project[]> = computed(() =>
			getProjectList(locale.value as Locale),
		);
		return { t, projects };
	},
});
</script>
<style lang="stylus" scoped>
@import '../../style/variables'
@import '../../style/mixins'

.ri-projects
  ri-m-bodyMaxWidth()

  &__title
    ri-m-pageTitle()
    padding 2 * $ri-baseMargin 0 $ri-baseMargin 0

  &__intro
    ri-m-pageSubtitle()
    padding 0
    padding-bottom 4 * $ri-baseMargin

  &__list
    ri-m-unstyleList()
</style>
