<template lang="pug">
  .ri-conferences
    ul.ri-conferences__list
      li.ri-conferences__item
        a.ri-conferences__logoContainer(href="http://dotjs.io")
          img.ri-conferences__logo(src="../../assets/logos/logo-dotjs.png", alt="dotJS logo")
        ul.ri-conferences__caption
          li(v-t="'dotjs.2017'")
          li(v-t="'dotjs.2018'")
      li.ri-conferences__item
        a.ri-conferences__logoContainer(href="http://dotcss.io")
          img.ri-conferences__logo(src="../../assets/logos/logo-dotcss.png", alt="dotCSS logo")
        ul.ri-conferences__caption
          li(v-t="'dotcss.2017'")
          li(v-t="'dotcss.2018'")
</template>

<script>
export default {
  name: 'RiConferences'
};
</script>

<style lang="stylus" scoped>
  @import '../../style/variables'
  @import '../../style/mixins'

  .ri-conferences
    &__intro
      ri-m-subtitleText($ri-tertiaryColor)

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

<i18n>
  {
    "en": {
      "dotjs": {
        "2017": "December 1, 2017 - attended",
        "2018": "November 9, 2018 - attended"
      },
      "dotcss": {
        "2017": "November 30, 2017 - attended",
        "2018": "November 8, 2018 - attended"
      }
    },
    "fr": {
      "dotjs": {
        "2017": "1er décembre 2017 - vue",
        "2018": "9 novembre 2018 - vue"
      },
      "dotcss": {
        "2017": "30 novembre 2017 - vue",
        "2018": "8 novembre 2018 - vue"
      }
    }
  }
</i18n>
