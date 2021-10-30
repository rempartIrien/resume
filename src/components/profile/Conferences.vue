<template lang="pug">
.ri-conferences
  ul.ri-conferences__list
    li.ri-conferences__item
      a.ri-conferences__logoContainer(href="http://dotjs.io")
        img.ri-conferences__logo(src="/assets/logos/logo-dotjs.png", alt="dotJS logo")
      ul.ri-conferences__caption
        li(v-t="'profile.conferences.dotjs.2017'")
        li(v-t="'profile.conferences.dotjs.2018'")
    li.ri-conferences__item
      a.ri-conferences__logoContainer(href="http://dotcss.io")
        img.ri-conferences__logo(src="/assets/logos/logo-dotcss.png", alt="dotCSS logo")
      ul.ri-conferences__caption
        li(v-t="'profile.conferences.dotcss.2017'")
        li(v-t="'profile.conferences.dotcss.2018'")
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Conferences'
  });
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
