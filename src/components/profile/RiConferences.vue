<template lang="pug">
  .ri-conferences
    ul.ri-conferences__list
      li.ri-conferences__item
        a(href="http://dotjs.io")
          img.ri-conferences__logo(src="../../assets/logos/logo-dotjs.png", alt="dotJS logo")
        ul.ri-conferences__caption
          li(v-t="'dotjs.2017'")
          li(v-t="'dotjs.2018'")
      li.ri-conferences__item
        a(href="http://dotcss.io")
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
  @import '../../style/variables';
  @import '../../style/mixins';

  .ri-conferences
    &__intro
      ri-m-subtitleText($ri-tertiaryColor)

    &__list,
    &__caption
      ri-m-unstyleList()

    &__list
      display flex
      padding 4 * $ri-baseMargin 0

    &__item
      flex 1
      text-align center

    &__logo
      height 6 * $ri-baseMargin

</style>

<i18n>
  {
    "en": {
      "dotjs": {
        "2017": "December 1, 2017",
        "2018": "November 9, 2018"
      },
      "dotcss": {
        "2017": "November 30, 2017",
        "2018": "November 8, 2018"
      }
    },
    "fr": {
      "dotjs": {
        "2017": "1er décembre 2017",
        "2018": "9 novembre 2018"
      },
      "dotcss": {
        "2017": "30 novembre 2017",
        "2018": "8 novembre 2018"
      }
    }
  }
</i18n>
