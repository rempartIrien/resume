<template lang="pug">
  .ri-block
    .ri-block__date {{experience.dateString}}
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
  @import '../../style/extends'

  .ri-block
    display flex
    width 100%
    padding-bottom 2 * $ri-baseMargin

    &__date
      text-align right
      width 20%

    &__info
      flex 1

    &__title,
    &__subtitle
      padding 0
      margin 0

    &__tags
      @extends .ri-u-list--unstyled

</style>


