<template lang="pug">
  div.ri-menu
    .ri-menu__title
      button.ri-menu__toggle(type="button", @click="toggleMenu()")
        span.ri-icon.ri-icon--menu
    ul.ri-menu__list(:class="{ 'ri-s-visible': isMenuVisible }")
      li.ri-menu__item(v-for="route in routes", :key="route.path")
        router-link.ri-menu__link(:to="route.path", exact-active-class="ri-s-active", v-t="route.data.translationKey")
</template>

<script>
import ROUTES from '../routes';

export default {
  name: 'RiMenu',
  data() {
    return {
      isMenuVisible: false
    };
  },
  computed: {
    routes: () => ROUTES
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    }
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      this.isMenuVisible = false;
      next();
    });
  }
};
</script>

<style lang="stylus" scoped>
  @import '../../style/variables'
  @import '../../style/mixins'

  .ri-menu
    position relative
    z-index 1

    &::after
      content ''
      z-index 2
      height $ri-borderWidth
      background-color $ri-secondaryColor
      position absolute
      bottom 0
      left 50%
      transform translateX(-50%)
      width 100%
      max-width $ri-body-maxWidth

    &__title
      padding $ri-baseMargin
      position relative
      z-index 1
      @media screen and (min-width: $ri-breakpoint-minSmall)
        display none

    &__toggle
      ri-m-buttonReset()

    &__list
      position absolute
      ri-m-unstyleList()
      margin 0
      padding 2 * $ri-baseMargin
      width 100%
      height 100vh
      bottom 0
      transform translateY(0)
      transition transform 250ms ease-in-out
      border-bottom $ri-borderWidth solid $ri-secondaryColor
      @media screen and (min-width: $ri-breakpoint-minSmall)
        border-bottom 0
        position static
        width auto
        height auto

      &.ri-s-visible
        transform translateY(100%)
        @media screen and (min-width: $ri-breakpoint-minSmall)
          transform translateY(0)

    &__title,
    &__list
      background-color $ri-backgroundColor

    &__item
      display block
      padding $ri-baseMargin
      @media screen and (min-width: $ri-breakpoint-minSmall)
        display inline-block
        padding 0 $ri-baseMargin

    &__link,
    &__toggle
      &,
      &:visited
        ri-m-text($ri-secondaryColor, 2rem)
        text-decoration none

      &:hover,
      &:active,
      &.ri-s-active
        color $ri-primaryColor

    &__link
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
