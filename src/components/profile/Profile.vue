<template lang="pug">
.ri-profile
  h1.ri-profile__title(v-t="'profile.title'")
  p.ri-profile__intro(v-t="'profile.intro'")
  .ri-profile__chapter
    Education.ri-profile__main
    .ri-profile__aside
      h2.ri-profile__subtitle(v-t="'profile.engineer.title'")
      p.ri-profile__description(v-t="'profile.engineer.description'")
  .ri-profile__chapter
    Skills.ri-profile__main
    .ri-profile__aside
      h2.ri-profile__subtitle(v-t="'profile.javascript.title'")
      p.ri-profile__description(v-t="'profile.javascript.description'")
  .ri-profile__chapter
    Conferences.ri-profile__main
    .ri-profile__aside
      h2.ri-profile__subtitle(v-t="'profile.ux.title'")
      p.ri-profile__description(v-t="'profile.ux.description'")
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import Conferences from './Conferences.vue';
  import Education from './Education.vue';
  import Skills from './Skills.vue';

  export default defineComponent({
    name: 'Profile',
    components: {
      Education,
      Skills,
      Conferences
    }
  });
</script>

<style lang="stylus" scoped>
  @import '../../style/variables'
  @import '../../style/mixins'

  .ri-profile
    ri-m-bodyMaxWidth()

    &__title
      ri-m-pageTitle()
      padding 2 * $ri-baseMargin 0 $ri-baseMargin 0

    &__intro
      ri-m-pageSubtitle()
      padding 0
      padding-bottom 4 * $ri-baseMargin

    &__chapter
      ri-m-part()

    &__aside
      ri-m-legend()
      flex 2
      @media screen and (min-width: $ri-breakpoint-minMedium)
        border-left $ri-borderWidth solid $ri-secondaryColor
        padding-right 4 * $ri-baseMargin
        padding-left 2 * $ri-baseMargin

    &__main
      flex 3
      align-self center
      padding $ri-baseMargin
      @media screen and (min-width: $ri-breakpoint-minMedium)
        padding-left 4 * $ri-baseMargin
        padding-right 6 * $ri-baseMargin

    &__subtitle
      ri-m-titleText()
      padding-bottom $ri-baseMargin

    &__description
      ri-m-text()
</style>
