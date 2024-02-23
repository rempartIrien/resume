<template lang="pug">
.ri-hobbies
  .ri-hobbies__title {{ t('hobbies.title') }}
  .ri-hobbies__intro {{ t('hobbies.intro') }}
  .ri-hobbies__part
    ol.ri-hobbies__aside.ri-music
      each val in [1, 2, 3, 4, 5, 6]
        li.ri-music__vinyl
    .ri-hobbies__main
      .ri-hobbies__subtitle {{ t('hobbies.music.title') }}
      .ri-hobbies__description {{ t('hobbies.music.description') }}
  .ri-hobbies__part
    PhotoStack.ri-hobbies__aside
    .ri-hobbies__main
      h2.ri-hobbies__subtitle {{ t('hobbies.travel.title') }}
      p.ri-hobbies__description {{ t('hobbies.travel.description') }}
  .ri-hobbies__part
    ol.ri-hobbies__aside.ri-code
      li.ri-code__character {
      li.ri-code__character code
      li.ri-code__character }
    .ri-hobbies__main
      h2.ri-hobbies__subtitle {{ t('hobbies.code.title') }}
      p.ri-hobbies__description {{ t('hobbies.code.description') }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

import PhotoStack from "./PhotoStack.vue";

export default defineComponent({
	name: "HobbyList",
	components: {
		PhotoStack,
	},
	setup() {
		const { t } = useI18n();
		return { t };
	},
});
</script>

<style lang="stylus" scoped>
@import '../../style/variables'
@import '../../style/mixins'

ri-m-vinyl($centerColor = var(--color-tertiary), $vinylColor = #232323)
  $vinylSize = 9rem
  display inline-block
  border 0.5rem solid var(--color-text)
  height $vinylSize
  width $vinylSize
  margin $ri-baseMargin 0
  border-radius 50%
  background-image radial-gradient(circle at center,
    transparent 0,
    transparent 2%,
    $centerColor 2%,
    $centerColor,
    $centerColor 25%,
    $vinylColor 25%,
    $vinylColor 100%
  )
  @media screen and (min-width: $ri-breakpoint-minLarge)
    $vinylSize = 11rem
    height $vinylSize
    width $vinylSize

.ri-hobbies
  ri-m-bodyMaxWidth()

  &__title
    ri-m-pageTitle()
    padding 2 * $ri-baseMargin 0 $ri-baseMargin 0

  &__intro
    ri-m-pageSubtitle()
    padding 0
    padding-bottom 4 * $ri-baseMargin

  &__part
    ri-m-part()

  &__subtitle
    ri-m-titleText()
    padding-bottom $ri-baseMargin

  &__description
    ri-m-regularText()

  &__main
    flex 3
    ri-m-legend()

  &__aside
    flex 2
    align-self center
    text-align center

.ri-music
  ri-m-unstyleList()
  padding 0 2 * $ri-baseMargin
  display flex
  flex-wrap wrap
  align-items center
  justify-content space-around
  border-radius 50%
  @media screen and (min-width: $ri-breakpoint-minMedium)
    padding-right 4 * $ri-baseMargin

  &__vinyl
    ri-m-vinyl()

    &:nth-of-type(2)
      ri-m-vinyl(var(--color-primary))

    &:nth-of-type(3)
      ri-m-vinyl(var(--color-secondary))

    &:nth-of-type(4)
      ri-m-vinyl(, var(--color-primary))

    &:nth-of-type(6)
      ri-m-vinyl(var(--color-text), var(--color-tertiary))

    &:nth-of-type(2),
    &:nth-of-type(3),
    &:nth-of-type(5),
    &:nth-of-type(6)
      display none

    @media screen and (min-width: $ri-breakpoint-minSmall)
      &:nth-of-type(2),
      &:nth-of-type(3)
        display inline-block
    @media screen and (min-width: $ri-breakpoint-minMedium)
      &:nth-of-type(5),
      &:nth-of-type(6)
        display inline-block

.ri-code
  ri-m-unstyleList()
  padding 0 2 * $ri-baseMargin
  font-size 2 * $ri-fontSize--title
  display flex
  align-items center
  @media screen and (min-width: $ri-breakpoint-minSmall)
    font-size 3 * $ri-fontSize--title
    padding-right 4 * $ri-baseMargin

  &__character
    display inline-block
    color var(--color-primary)

    &:first-of-type,
    &:last-of-type
      flex 1
      color var(--color-tertiary)

    &:first-of-type
      text-align right

    &:last-of-type
      text-align start
</style>
