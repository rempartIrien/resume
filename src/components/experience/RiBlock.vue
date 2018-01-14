<template lang="pug">
  .ri-block(:class="{ 'ri-s-inProgress': experience.inProgress }")
    .ri-block__date.ri-date
      p.ri-date__text {{ experience.dateString }}
      p.ri-block__role {{ experience.role }}
    .ri-block__info
      h2.ri-block__title {{ experience.title }}
      p.ri-block__content {{ experience.content }}
      ul.ri-block__tags.ri-tagList
        li.ri-tagList__item(v-for="tag in experience.tags", :key="tag") {{ tag }}
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

  $ri-arrow-width = 0.4rem

  .ri-block
    display flex
    width 100%

    &__date
      ri-m-text($ri-tertiaryColor, $ri-fontSize--subtitle, 500)
      border-right $ri-arrow-width solid $ri-tertiaryColor
      line-height $ri-fontSize--title
      text-align right
      width 35%

    &__date,
    &__info
      padding 5 * $ri-baseMargin
      padding-top 0

    &__info
      flex 1

    &__title
      ri-m-titleText()
      line-height $ri-fontSize--title

    &__role
      ri-m-regularText()
      line-height initial

    .ri-date__text,
    &__title,
    &__content
      ri-m-noPaddingMargin()
      padding-bottom $ri-baseMargin

  .ri-tagList
    ri-m-unstyleList()
    ri-m-regularText($ri-secondaryColor)

    &__item
      display inline-block

      &:not(:last-child):after
        content ','
        display inline-block
        padding-right 0.5rem

  .ri-date__text
    position relative

    &::after
      content ''
      border-radius 50%
      background-color $ri-tertiaryColor
      display block
      height 4 * $ri-arrow-width
      width 4 * $ri-arrow-width
      position absolute
      right -4 * $ri-baseMargin + -5.5 * $ri-arrow-width
      top 0.5 * ($ri-fontSize--title - 4 * $ri-arrow-width)

  &.ri-s-inProgress .ri-date__text::after
    border-radius 0
    width 0
    height 0
    border-top 0
    background-color transparent
    border-left 2.5 * $ri-arrow-width solid transparent
    border-right 2.5 * $ri-arrow-width solid transparent
    border-bottom 5 * $ri-arrow-width solid $ri-tertiaryColor
    top -1 * $ri-arrow-width
    right -4 * $ri-baseMargin + -6 * $ri-arrow-width

</style>


