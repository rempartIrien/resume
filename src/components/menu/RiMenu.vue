<template lang="pug">
  div.ri-menu
    ul.ri-menu__list
      li.ri-menu__item(v-for="route in routes", :key="route.path")
        router-link.ri-menu__link(:to="route.path", exact-active-class="ri-s-active", v-t="route.data.translationKey")
</template>

<script>
import ROUTES from '../routes';

export default {
  name: 'RiMenu',
  data() {
    return {};
  },
  computed: {
    routes: () => ROUTES
  }
};
</script>

<style lang="stylus" scoped>
  @import '../../style/variables'
  @import '../../style/mixins'

  .ri-menu
    position relative

    &::after
      content ''
      height $ri-borderWidth
      background-color $ri-secondaryColor
      position absolute
      bottom 0
      left 50%
      transform translateX(-50%)
      width 100%
      max-width $ri-body-maxWidth

    &__list
      ri-m-unstyleList()
      margin 0
      padding 2 * $ri-baseMargin

    &__item
      display inline-block
      padding 0 $ri-baseMargin

    &__link
      &,
      &:visited
        text-decoration none
        ri-m-text($ri-secondaryColor, 2rem)

      &:hover,
      &:active,
      &.ri-s-active
        color $ri-primaryColor

      &:hover,
      &:active
        text-decoration underline

</style>

<i18n>
  {
    "en": {
      "home": "Home",
      "profile": "Profile",
      "experience": "Experience",
      "hobbies": "Hobbies",
      "faq": "FAQ"
    },
    "fr": {
      "home": "Accueil",
      "profile": "Profile",
      "experience": "Carrière",
      "hobbies": "Loisirs",
      "faq": "FAQ"
    }
  }
</i18n>
