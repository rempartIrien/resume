<template lang="pug">
.ri-work
  h1(v-t="'title'")
  p(v-t="'summary'")
  ul.ri-block__experiences
    li.ri-block__experience(v-for="experience in experiences", :key="experience.id")
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
  @import '../../style/variables'
  @import '../../style/mixins';

  .ri-block
    &__experiences
      ri-m-unstyleList()

</style>

<i18n>
  {
    "en": {
      "title": "Short long stories",
      "summary": "Here are all my experiences. Some are success, others are failures but I always did my best."
    },
    "fr": {
      "title": "Quelques histoires courtes",
      "summary": "Voici mes différentes expériences. Certaines se sont bien terminées, d'autres beaucoup moins bien ; quoiqu'il en soit, j'ai toujorus fait de mon mieux."
    }
  }
</i18n>



