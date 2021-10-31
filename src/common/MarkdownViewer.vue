<template lang="pug">
div(v-html="compiledMarkdown")
</template>

<script lang="ts">
  import { Converter } from 'showdown';
  import { ComputedRef, computed, defineComponent } from 'vue';

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
    setup(props) {
      const compiledMarkdown: ComputedRef<string> = computed(() => {
        const html: string = new Converter().makeHtml(props.input);
        return addCustomCssClasses(html);
      });

      return { compiledMarkdown };
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
