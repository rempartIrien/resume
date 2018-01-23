<template lang="pug">
  .ri-faq
    h1.ri-faq__title(v-t="'title'")
    p.ri-faq__intro(v-t="'intro'")
    ul.ri-faq__questions.ri-questionList
      li.ri-questionList__item(v-for="question in questions", :key="question.question")
        h2.ri-faq__question {{ question.question }}
        vue-markdown.ri-faq__answer(:anchorAttributes="{ target: '_blank' }") {{ question.answer }}
</template>

<script>
import VueMarkdown from 'vue-markdown';
import questions from './questions.json';

export default {
  name: 'RiFaq',
  components: {
    VueMarkdown
  },
  computed: {
    questions() {
      return questions.en;
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import '../../style/variables'
  @import '../../style/mixins'

  .ri-faq
    ri-m-bodyMaxWidth()

    &__title
      ri-m-pageTitle()
      padding 2 * $ri-baseMargin 0 $ri-baseMargin 0

    &__intro
      ri-m-pageSubtitle()
      padding 0
      padding-bottom 4 * $ri-baseMargin

    &__question
      ri-m-subtitleText($ri-primaryColor)
      padding-bottom $ri-baseMargin

    &__answer
      ri-m-text()

      /deep/
        > p
          // Remove default style in generated HTML by markdown tag
          margin 0
        a
          ri-m-link()

    .ri-questionList
      ri-m-unstyleList()

      &__item
        padding-bottom 4 * $ri-baseMargin


</style>

<i18n>
  {
    "en": {
      "title": "Knowledge is power",
      "intro": "Some answers may lie here..."
    },
    "fr": {
      "title": "La connaissance, c'est le pouvoir",
      "intro": "Quelques réponses pourraient se trouver ici..."
    }
  }
</i18n>



