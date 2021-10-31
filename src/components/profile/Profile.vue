<template lang="pug">
.ri-profile
  h1.ri-profile__title {{ t('profile.title') }}
  p.ri-profile__intro {{ t('profile.intro') }}
  .ri-profile__chapter
    Education.ri-profile__main
    .ri-profile__aside
      h2.ri-profile__subtitle {{ t('profile.engineer.title') }}
      p.ri-profile__description {{ t('profile.engineer.description') }}
  .ri-profile__chapter
    Skills.ri-profile__main
    .ri-profile__aside
      h2.ri-profile__subtitle {{ t('profile.javascript.title') }}
      p.ri-profile__description {{ t('profile.javascript.description') }}
  .ri-profile__chapter
    Conferences.ri-profile__main
    .ri-profile__aside
      h2.ri-profile__subtitle {{ t('profile.ux.title') }}
      p.ri-profile__description {{ t('profile.ux.description') }}
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useI18n } from 'vue-i18n';

  import Conferences from './Conferences.vue';
  import Education from './Education.vue';
  import Skills from './Skills.vue';

  export default defineComponent({
    name: 'Profile',
    components: {
      Education,
      Skills,
      Conferences
    },
    setup() {
      const { t } = useI18n();
      return { t };
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
