<template lang="pug">
.ri-experience
  h1.ri-experience__title(v-t="'experience.title'")
  p.ri-experience__intro(v-t="'experience.summary'")
  ul.ri-experience__experiences
    li(v-for="experience in experiences", :key="experience.id", :class="{ 'ri-s-collapsed': isCollapsed(experience) }")
      Block(:experience="experience", :collapsed="isCollapsed(experience)", @showAll="showAll()")
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import { Experience } from './experience.model';
  import experiences from './experiences.json';
  import Block from './Block.vue';

  export default defineComponent({
    name: 'Experience',
    components: {
      Block
    },
    data() {
      return { collapsedAll: true };
    },
    computed: {
      experiences(): Experience[] {
        return experiences.en;
      }
    },
    methods: {
      showAll() {
        this.collapsedAll = false;
      },
      isCollapsed(experience: Experience): boolean {
        return experience.collapsed && this.collapsedAll;
      }
    }
  });
</script>

<style lang="stylus" scoped>
  @import '../../style/variables'
  @import '../../style/mixins';

  .ri-experience
    ri-m-bodyMaxWidth()

    &__title
      ri-m-pageTitle()
      padding 2 * $ri-baseMargin 0 $ri-baseMargin 0

    &__intro
      ri-m-pageSubtitle()
      padding 0
      padding-bottom 4 * $ri-baseMargin

    &__experiences
      ri-m-unstyleList()

      > .ri-s-collapsed + .ri-s-collapsed
        display none
</style>
