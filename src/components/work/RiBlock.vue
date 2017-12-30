<template lang="pug">
  .ri-block
    p
      | date: {{experience.dateString}}
      | title: {{experience.title}}
      | subtitle: {{experience.subtitle}}
      | content: {{experience.content}}
    ul.ri-block__tags
      li(v-for="tag in experience.tags", :key="tag") {{ tag }}
</template>

<script>
export default {
  name: 'RiBlock',
  props: ['experience']
};
</script>

<style lang="stylus" scoped>
  @import '../../style/extends';

  .ri-block__tags
    @extends .ri-u-list--unstyled
</style>


