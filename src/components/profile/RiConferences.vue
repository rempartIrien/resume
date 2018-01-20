<template lang="pug">
  .ri-conferences
    ul.ri-conferences__list
      li.ri-conferences__item
        a(href="http://dotjs.io")
          img.ri-conferences__logo(src="../../assets/logos/logo-dotjs.png", alt="dotJS logo")
        p.ri-conferences__caption(v-t="'dotjs'")
      li.ri-conferences__item
        a(href="http://dotcss.io")
          img.ri-conferences__logo(src="../../assets/logos/logo-dotcss.png", alt="dotCSS logo")
        p.ri-conferences__caption(v-t="'dotcss'")
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

    &__list
      ri-m-unstyleList()
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
      "dotjs": "December 1, 2017",
      "dotcss": "November 30, 2017"
    },
    "fr": {
      "dotjs": "1er décembre 2017",
      "dotcss": "30 novembre 2017"
    }
  }
</i18n>
