<template lang="pug">
ul.ri-skills
  li.ri-skills__item.ri-skills__item--90 {{ t('profile.skills.javascript') }}
  li.ri-skills__item.ri-skills__item--80 {{ t('profile.skills.react') }}
  li.ri-skills__item.ri-skills__item--70 {{ t('profile.skills.vuejs') }}
  li.ri-skills__item.ri-skills__item--70 {{ t('profile.skills.solidjs') }}
  li.ri-skills__item.ri-skills__item--70 {{ t('profile.skills.angular') }}
  li.ri-skills__item.ri-skills__item--60 {{ t('profile.skills.nodejs') }}
  li.ri-skills__item.ri-skills__item--70 {{ t('profile.skills.test') }}
  li.ri-skills__item.ri-skills__item--90 {{ t('profile.skills.html') }}
  li.ri-skills__item.ri-skills__item--90 {{ t('profile.skills.css') }}
  li.ri-skills__item.ri-skills__item--80 {{ t('profile.skills.english') }}
  li.ri-skills__item.ri-skills__item--100 {{ t('profile.skills.french') }}
  li.ri-skills__item.ri-skills__item--90 {{ t('profile.skills.git') }}
  li.ri-skills__item.ri-skills__item--50 {{ t('profile.skills.java') }}
  li.ri-skills__item.ri-skills__item--50 {{ t('profile.skills.scala') }}
  li.ri-skills__item.ri-skills__item--80 {{ t('profile.skills.agile') }}
  li.ri-skills__item.ri-skills__item--70 {{ t('profile.skills.uml') }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
	name: "SkillList",
	setup() {
		const { t } = useI18n();
		return { t };
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
  display grid
  grid-column-gap 2 * $ri-baseMargin
  grid-template-columns repeat(2, 1fr)
  @media screen and (min-width: $ri-breakpoint-minLarge)
    grid-template-columns repeat(3, 1fr)

  &__item
    position relative
    display block
    align-self end
    padding 0.5 * $ri-baseMargin
    padding-top 1.5 * $ri-baseMargin
    border-bottom $ri-pointWidth solid var(--color-tertiary)

    &::after
      position absolute
      content ''
      height $ri-baseMargin
      width $ri-baseMargin
      bottom - 0.5 * ($ri-baseMargin + $ri-pointWidth)
      left 50%
      border-radius 50%
      background-color var(--color-tertiary)

    &--30::after
      left 30%
    &--40::after
      left 40%
    &--60::after
      left 60%
    &--70::after
      left 70%
    &--80::after
      left 80%
    &--90::after
      left 90%
    &--100::after
      left "calc(100% - %s)" % (2 * $ri-pointWidth)
</style>
