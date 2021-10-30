<template lang="pug">
.ri-faq
  h1.ri-faq__title(v-t="'faq.title'")
  p.ri-faq__intro(v-t="'faq.intro'")
  ul.ri-faq__questions.ri-questionList
    li.ri-questionList__item(v-for="question in questions", :key="question.question")
      h2.ri-faq__question {{ question.question }}
      MarkdownViewer.ri-faq__answer(:input=" question.answer ")
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import MarkdownViewer from '../../common/MarkdownViewer.vue';

  import questions from './questions.json';

  export default defineComponent({
    name: 'Faq',
    components: {
      MarkdownViewer
    },
    computed: {
      questions() {
        return questions.en;
      }
    }
  });
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
      text-align justify
      @media screen and (min-width: $ri-breakpoint-minMedium)
        text-align left

    .ri-questionList
      ri-m-unstyleList()

      &__item
        padding-bottom 4 * $ri-baseMargin
</style>
