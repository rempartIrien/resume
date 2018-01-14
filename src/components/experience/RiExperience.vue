<template lang="pug">
.ri-experience
  h1.ri-experience__title(v-t="'title'")
  p.ri-experience__intro(v-t="'summary'")
  ul.ri-experience__experiences
    li(v-for="experience in experiences", :key="experience.id", :class="{ 'ri-s-collapsed': isCollapsed(experience) }")
      ri-block(:experience="experience", :collapsed="isCollapsed(experience)", @show-all="showAll()")
</template>

<script>
import RiBlock from './RiBlock';
import experiences from './experiences.json';

export default {
  name: 'RiExperience',
  components: {
    RiBlock
  },
  data() {
    return { collapsedAll: true };
  },
  methods: {
    showAll() {
      this.collapsedAll = false;
    },
    isCollapsed(experience) {
      return experience.collapsed && this.collapsedAll;
    }
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

  .ri-experience
    ri-m-bodyMaxWidth()

    &__title
      ri-m-pageTitle()
      padding $ri-baseMargin 0

    &__intro
      ri-m-pageSubtitle()
      padding 0
      padding-bottom 4 * $ri-baseMargin

    &__experiences
      ri-m-unstyleList()

      > .ri-s-collapsed + .ri-s-collapsed
        display none

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



