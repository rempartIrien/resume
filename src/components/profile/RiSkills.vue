<template lang="pug">
  div
    //- h2(v-t="'title'")
    ul.ri-skills
      li.ri-skills__item.ri-skills__item--80(v-t="'skills.javascript'")
      li.ri-skills__item.ri-skills__item--60(v-t="'skills.angular'")
      li.ri-skills__item(v-t="'skills.vuejs'")
      li.ri-skills__item.ri-skills__item--90(v-t="'skills.angularjs'")
      li.ri-skills__item.ri-skills__item--70(v-t="'skills.test'")
      li.ri-skills__item.ri-skills__item--90(v-t="'skills.html'")
      li.ri-skills__item.ri-skills__item--90(v-t="'skills.css'")
      li.ri-skills__item.ri-skills__item--70(v-t="'skills.english'")
      li.ri-skills__item.ri-skills__item--100(v-t="'skills.french'")
      li.ri-skills__item.ri-skills__item--80(v-t="'skills.git'")
      li.ri-skills__item.ri-skills__item--30(v-t="'skills.java'")
      li.ri-skills__item.ri-skills__item--60(v-t="'skills.agile'")
      li.ri-skills__item.ri-skills__item--60(v-t="'skills.uml'")
</template>

<script>
  export default {
    name: 'RiSkills'
  };
</script>

<style lang="stylus" scoped>
  @import '../../style/variables';
  @import '../../style/mixins';

  $ri-pointWidth = 0.25 * $ri-baseMargin

  .ri-skills
    ri-m-unstyleList()
    padding $ri-baseMargin 0
    display grid
    grid-template-columns repeat(3, 1fr)
    grid-column-gap 2 * $ri-baseMargin

    &__item
      position relative
      display block
      align-self end
      padding 0.5 * $ri-baseMargin
      padding-top 1.5 * $ri-baseMargin
      border-bottom $ri-pointWidth solid $ri-tertiaryColor

      &::after
        position absolute
        content ''
        height $ri-baseMargin
        width $ri-baseMargin
        bottom - 0.5 * ($ri-baseMargin + $ri-pointWidth)
        left 50%
        border-radius 50%
        background-color $ri-tertiaryColor

      &--30::after
        left 30%
      &--40::after
        left 40%
      &--60::after
        left 60%
      &--70::after
        left 70%
      &--80::after
        left 80%
      &--90::after
        left 90%
      &--100::after
        left "calc(100% - %s)" % (2 * $ri-pointWidth)


</style>

<i18n>
  {
    "en": {
      "title": "Skills",
      "skills": {
        "javascript": "JavaScript, TypeScript",
        "angular": "Angular",
        "vuejs": "Vue.js",
        "angularjs": "AngularJS",
        "test": "Jasmine",
        "html": "HTML, Pug",
        "css": "CSS, Stylus, Sass",
        "english": "English",
        "french": "French",
        "git": "Git",
        "java": "Java, Spring",
        "agile": "Agile methodologies",
        "uml": "UML"
      }
    },
    "fr": {
      "title": "Compétences",
      "skills": {
        "javascript": "JavaScript, TypeScript",
        "angular": "Angular",
        "vuejs": "Vue.js",
        "angularjs": "AngularJS",
        "test": "Jasmine",
        "html": "HTML, Pug",
        "css": "CSS, Stylus, Sass",
        "english": "Angiais",
        "french": "Français",
        "git": "Git",
        "java": "Java, Spring",
        "agile": "Méthodologies agiles",
        "uml": "UML"
      }
    }
  }
</i18n>
