<template lang="pug">
  ul.ri-menu
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
    margin 0

    &__item
      display inline-block
      padding $ri-baseMargin

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
      "why": "Why?"
    },
    "fr": {
      "home": "Accueil",
      "profile": "Profile",
      "experience": "Carrière",
      "hobbies": "Loisirs",
      "why": "Pourquoi ?"
    }
  }
</i18n>
