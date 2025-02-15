<template lang="pug">
ul.ri-skills
  li.ri-skills__item
    h2.ri-skills__useType.ri-skills__useType--dailyUse {{ t("profile.skills.daily_use") }}
    TagList(:tags="skillMap.dailyUse")
  li.ri-skills__item
    h2.ri-skills__useType.ri-skills__useType--occasionalUse {{ t("profile.skills.occasional_use") }}
    TagList(:tags="skillMap.occasionalUse")
  li.ri-skills__item
    h2.ri-skills__useType.ri-skills__useType--hobbies {{ t("profile.skills.hobbies") }}
    TagList(:tags="skillMap.hobbies")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

import TagList from "../../common/TagList.vue";

import { SkillMap, getSkillMap } from "./skill.data";

export default defineComponent({
	name: "SkillList",
	components: { TagList },
	setup() {
		const { t } = useI18n();
		const skillMap: SkillMap = getSkillMap();
		return { t, skillMap };
	},
});
</script>

<style lang="stylus" scoped>
@import '../../style/variables'
@import '../../style/mixins'

$ri-pointWidth = 0.25 * $ri-baseMargin

.ri-skills
	ri-m-unstyleList()
	padding $ri-baseMargin 0

	&__item
		& + &
			margin-top $ri-baseMargin

	&__useType
		ri-m-subtitleText(var(--color-tertiary))
		padding 0.5 * $ri-baseMargin 0

		&::before
			padding-right: $ri-baseMargin

		&--dailyUse::before
			content: '✅'

		&--occasionalUse::before
			content: '✨'

		&--hobbies::before
			content: '🌈'
</style>
