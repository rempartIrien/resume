<template lang="pug">
.ri-work
  h1(v-t="'title'")
  ul.ri-block__experiences
    li(v-for="experience in experiences", :key="experience.id")
      ri-block(:experience="experience")
</template>

<script>
import RiBlock from './RiBlock';
import experiences from './experiences.json';

export default {
  name: 'RiWork',
  components: {
    RiBlock
  },
  computed: {
    experiences() {
      return experiences.en;
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import '../../style/extends';

  .ri-block__experiences
    @extends .ri-u-list--unstyled
</style>

<i18n>
  {
    "en": { "title": "Work" },
    "fr": { "title": "Travail" }
  }
</i18n>



