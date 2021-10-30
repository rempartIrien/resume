<template lang="pug">
div(v-html="compiledMarkdown")
</template>

<script lang="ts">
  import { Converter } from 'showdown';
  import { defineComponent } from 'vue';

  function addCustomCssClasses(html: string): string {
    return (
      html
        // Add class to links
        .replaceAll(
          '<a href=',
          '<a class="ri-markdown__link" target="_blank" rel="noopener noreferrer nofollow" href='
        )
        // Add class to paragraphs
        .replaceAll('<p>', '<p class="ri-markdown__paragraph">')
    );
  }

  export default defineComponent({
    name: 'MarkdownViewer',
    props: {
      input: {
        type: String,
        required: true
      }
    },
    computed: {
      compiledMarkdown(): string {
        const html: string = new Converter().makeHtml(this.input);
        return addCustomCssClasses(html);
      }
    }
  });
</script>

<style lang="stylus">
  @import '../style/mixins'
  .ri-markdown
    &__link
      ri-m-link()

    &__paragraph
      // Remove default style in generated HTML by markdown tag
      margin 0
</style>
