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
    // See App.vue for padding policy
    box-shadow 0px 1px 10px rgba($ri-textColor, 0.5)

    &__list
      ri-m-unstyleList()
      margin 0
      padding $ri-baseMargin

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
