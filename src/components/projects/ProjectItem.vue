<template lang="pug">
.ri-project
	.ri-project__info
		h2.ri-project__name {{ project.name }}
		MarkdownViewer.ri-project__description(:input="project.description")
		.ri-project__imageContainer(v-if="imageUrl")
			img.ri-project__image(:src="imageUrl")
		ul.ri-project__links
			li
				a.ri-project__link.ri-project__link--projectLink(
					:href="project.projectUrl",
					target="_blank",
					rel="noopener noreferrer nofollow") {{ t('projects.links.project') }}
			li
				a.ri-project__link.ri-project__link--repoLink(
					:href="project.repoUrl",
					target="_blank",
					rel="noopener noreferrer nofollow") {{ t('projects.links.repo') }}
	.ri-project__texts
		MarkdownViewer(:input="project.challenges")
		i18n-t(keypath="projects.powered_by", tag="p")
			template(v-slot:technos)
				TagList.ri-project__tags(:tags="project.tags")
</template>
<script lang="ts">
import { PropType, defineComponent } from "vue";
import { computed } from "vue";
import { ComputedRef } from "vue";
import { useI18n } from "vue-i18n";

import MarkdownViewer from "../../common/MarkdownViewer.vue";
import TagList from "../../common/TagList.vue";
import { useTheme } from "../../common/theme.composer";

import { Project } from "./project.data";

export default defineComponent({
	name: "ProjectItem",
	components: { MarkdownViewer, TagList },
	props: {
		project: {
			type: Object as PropType<Project>,
			required: true,
		},
	},
	setup(props) {
		const { t } = useI18n();
		const { isDarkMode } = useTheme();
		const imageUrl: ComputedRef<string> = computed(() => {
			return isDarkMode.value
				? props.project.imageUrl.dark
				: props.project.imageUrl.light;
		});
		return { t, imageUrl };
	},
});
</script>
<style lang="stylus" scoped>
@import '../../style/variables'
@import '../../style/mixins'

.ri-project
	ri-m-part()

	&__info
		flex 1
		@media screen and (min-width: $ri-breakpoint-minMedium)
			padding 0 2 * $ri-baseMargin
			display flex
			flex-direction column
			justify-content center

	&__texts
		flex 1
		ri-m-legend()

	&__name
		ri-m-titleText()
		padding-bottom $ri-baseMargin
		text-align start
		line-height $ri-fontSize--title

	&__imageContainer
		text-align center
		padding $ri-baseMargin

	&__image
		display inline-block
		height 10 * $ri-baseMargin

	&__description,
	&__imageContainer,
	&__tags
		margin-bottom $ri-baseMargin

	&__description
		text-align justify
		@media screen and (min-width: $ri-breakpoint-minMedium)
			text-align start

	&__links
		ri-m-unstyleList()
		@media screen and (min-width: $ri-breakpoint-minSmall)
			display flex
			justify-content center
			gap 2 * $ri-baseMargin
		@media screen and (min-width: $ri-breakpoint-minMedium)
			display inherit
		@media screen and (min-width: $ri-breakpoint-minLarge)
			display flex
			gap 4 * $ri-baseMargin

	&__link
		ri-m-link()

		&--projectLink
			&::before
				content ''
				ri-m-icon(
					'/assets/icons/earth.svg',
					1.2 * $ri-fontSize,
					1.2 * $ri-fontSize,
					var(--color-secondary)
				)

		&--repoLink
			&::before
				content ''
				ri-m-icon(
					'/assets/icons/github.svg',
					1.2 * $ri-fontSize,
					1.2 * $ri-fontSize,
					var(--color-secondary)
				)

	&__tags
		display inline
</style>
