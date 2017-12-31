<template lang="pug">
  .ri-block(:class="{ 'ri-s-inProgress': experience.inProgress }")
    .ri-block__date.ri-date
     .ri-date__text {{experience.dateString}}
    .ri-block__info
      h2.ri-block__title {{experience.title}}
      h3.ri-block__subtitle {{experience.subtitle}}
      p.ri-block__content {{experience.content}}
      ul.ri-block__tags
        li(v-for="tag in experience.tags", :key="tag") {{ tag }}
</template>

<script>
export default {
  name: 'RiBlock',
  props: ['experience']
};
</script>

<style lang="stylus" scoped>
  @import '../../style/variables'
  @import '../../style/mixins'

  .ri-block
    display flex
    width 100%

    &__date
      ri-m-titleText($ri-tertiaryColor)
      border-right $ri-baseMargin solid $ri-tertiaryColor
      text-align right
      width 20%

    &__date,
    &__info
      padding 3 * $ri-baseMargin
      padding-top 0

    &__info
      flex 1

    &__title
      ri-m-titleText()

    &__subtitle
      ri-m-subtitleText()

    &__title,
    &__subtitle
      ri-m-noPaddingMargin()

    &__tags
      ri-m-unstyleList()

  .ri-date__text
    position relative

   &::after
    content ''
    border-radius 50%
    border $ri-baseMargin solid $ri-tertiaryColor
    background-color $ri-tertiaryColor
    display block
    height $ri-baseMargin
    width $ri-baseMargin
    position absolute
    right -(2 + 3) * $ri-baseMargin
    top 0

  &.ri-s-inProgress .ri-date__text::after
    border-radius 0
    width 0
    height 0
    border-top 0
    background-color transparent
    border-left 1.75 * $ri-baseMargin solid transparent
    border-right 1.75 * $ri-baseMargin solid transparent
    border-bottom 3.5 * $ri-baseMargin solid $ri-tertiaryColor
    top -1 * $ri-baseMargin
    right -(2 + 3.25) * $ri-baseMargin

</style>


