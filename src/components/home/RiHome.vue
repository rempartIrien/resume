<template lang="pug">
  .ri-home
    h1.ri-home__title(v-t="'title'")
    h2.ri-home__subtitle(v-t="'subtitle'")
    img.ri-home__photo(src="../../assets/photos/photo-home.jpg", :alt="$t('photo')")
    .ri-home__text(v-t="'text'")
    .ri-home__github.ri-github
      a(href="https://github.com/rempartIrien/resume", target="_blank")
        img.ri-github__logo(src="../../assets/logos/logo-github.png", :alt="$t('github.logo')")
      vue-markdown.ri-github__text(:anchorAttributes="{ target: '_blank' }") {{ $t('github.text') }}
</template>}}

<script>
import VueMarkdown from 'vue-markdown';

export default {
  name: 'RiHome',
  components: {
    VueMarkdown
  }
};
</script>

<style lang="stylus" scoped>
  @import '../../style/variables';
  @import '../../style/mixins';

  .ri-home
    ri-m-bodyMaxWidth()

    &__title
      ri-m-titleText(, 4rem)
      padding $ri-baseMargin 0

    &__subtitle
      ri-m-subtitleText()
      padding-bottom 2 * $ri-baseMargin

    &__photo
      width 100%

    &__text
      ri-m-text()
      padding $ri-baseMargin 0


  .ri-github
    display flex
    align-items center
    padding $ri-baseMargin 0

    &__text
      ri-m-text()

      /deep/
        > p
          // Remove default style in generated HTML by markdown tag
          margin 0
          padding-left $ri-baseMargin
        a
          ri-m-link()
</style>

<i18n>
  {
    "en": {
      "title": "Pierre Martin-Henry",
      "subtitle": "Frontend software engineer interested in UX",
      "text": "Welcome aboard! I am Pierre and I made this online résumé to make you know me a little more. Enjoy the trip!",
      "github": {
        "logo": "GitHub logo",
        "text": "This résumé code is on [Github](https://github.com/rempartIrien/resume), if you want to take a look at it."
      }
    },
    "fr": {
      "title": "Pierre Martin-Henry",
      "subtitle": "Ingénieur logiciel frontend intéressé par l'UX",
      "text": "Bienvenue à bord ! Je suis Pierre et j'ai réalisé ce CV en ligne pour que vous appreniez à mieux me connaître. Profitez du voyage !",
      "github": {
        "logo": "logo GitHub",
        "text": "Le code de ce CV est disponible [Github](https://github.com/rempartIrien/resume), si jamais vous voulez y jeter un oeil."
      }
    }
  }
</i18n>

