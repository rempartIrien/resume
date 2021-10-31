<template lang="pug">
.ri-block(ref="root", :class="{ 'ri-s-inProgress': experience.inProgress, 'ri-s-collasped': collapsed }")
  .ri-block__date.ri-date
    p.ri-date__text {{ experience.dateString }}
    p.ri-block__role {{ experience.role }}
    button.ri-block__showDetails(type=button, @click="showDetails", v-t="'experience.show_all'")
  .ri-block__info
    h2.ri-block__title {{ experience.title }}
    p.ri-block__content {{ experience.content }}
    ul.ri-block__tags.ri-tagList
      li.ri-tagList__item(v-for="tag in experience.tags", :key="tag") {{ tag }}
</template>

<script lang="ts">
  import { PropType, Ref, defineComponent, nextTick, ref } from 'vue';

  import { Experience } from './experience.data';

  const SHOW_ALL_EVENT: string = 'showAll';

  export default defineComponent({
    name: 'Block',
    props: {
      experience: { type: Object as PropType<Experience>, required: true },
      collapsed: { type: Boolean as PropType<boolean>, required: true }
    },
    emits: [SHOW_ALL_EVENT],
    setup(props, { emit }) {
      const root: Ref<HTMLElement | undefined> = ref();

      const showDetails: () => void = () => {
        emit(SHOW_ALL_EVENT);
        void nextTick(() => {
          root.value?.scrollIntoView({
            behavior: 'smooth'
          });
        });
      };
      return { showDetails, root };
    }
  });
</script>

<style lang="stylus" scoped>
  @import '../../style/variables'
  @import '../../style/mixins'

  $ri-arrow-width = 0.4rem

  .ri-block
    width 100%
    padding-bottom 2 * $ri-baseMargin
    @media screen and (min-width: $ri-breakpoint-minSmall)
      padding-bottom 0
      display flex

    &__date
      ri-m-text(var(--color-tertiary), $ri-fontSize--subtitle, 500)
      line-height $ri-fontSize--title
      text-align center
      @media screen and (min-width: $ri-breakpoint-minSmall)
        text-align right
        width 35%
        border-right $ri-arrow-width solid var(--color-tertiary)

    &__date,
    &__info
      padding $ri-baseMargin 0
      @media screen and (min-width: $ri-breakpoint-minSmall)
        padding 2 * $ri-baseMargin
        padding-top 0
      @media screen and (min-width: $ri-breakpoint-minMedium)
        padding 5 * $ri-baseMargin
        padding-top 0

    &__info
      flex 1
      text-align justify
      @media screen and (min-width: $ri-breakpoint-minMedium)
        text-align left

    &__showDetails
      ri-m-button(var(--color-background), var(--color-tertiary), $ri-fontSize, 400)
      padding 0.5 * $ri-baseMargin
      display none
      @media screen and (min-width: $ri-breakpoint-minSmall)
        ri-m-button(var(--color-tertiary), var(--color-background), $ri-fontSize, 400)

    &__title
      ri-m-titleText()
      text-align left
      line-height $ri-fontSize--title

    &__role
      ri-m-regularText()
      line-height initial

    .ri-date__text,
    &__title,
    &__content
      ri-m-noPaddingMargin()
      padding-bottom $ri-baseMargin

  .ri-tagList
    ri-m-unstyleList()
    ri-m-regularText(var(--color-secondary))

    &__item
      display inline-block

      &:not(:last-child):after
        content ','
        display inline-block
        padding-right 0.5rem

  .ri-date__text
    position relative

    &::after
      border-radius 50%
      background-color var(--color-tertiary)
      display block
      height 4 * $ri-arrow-width
      width 4 * $ri-arrow-width
      position absolute
      top 0.5 * ($ri-fontSize--title - 4 * $ri-arrow-width)
      right -1 * $ri-baseMargin + -5.5 * $ri-arrow-width
      @media screen and (min-width: $ri-breakpoint-minSmall)
        content ''
      @media screen and (min-width: $ri-breakpoint-minMedium)
        right -4 * $ri-baseMargin + -5.5 * $ri-arrow-width

  &.ri-s-inProgress .ri-date__text::after
    @media screen and (min-width: $ri-breakpoint-minSmall)
      border-radius 0
      width 0
      height 0
      border-top 0
      background-color transparent
      border-left 2.5 * $ri-arrow-width solid transparent
      border-right 2.5 * $ri-arrow-width solid transparent
      border-bottom 5 * $ri-arrow-width solid var(--color-tertiary)
      top -1 * $ri-arrow-width
      right -1 * $ri-baseMargin + -6 * $ri-arrow-width
    @media screen and (min-width: $ri-breakpoint-minMedium)
      right -4 * $ri-baseMargin + -6 * $ri-arrow-width

  &.ri-s-collasped
    .ri-block__info,
    .ri-block__role,
    .ri-date__text
      display none

    .ri-date
      @media screen and (min-width: $ri-breakpoint-minSmall)
        border-right-style dotted
        padding-top 2 * $ri-baseMargin

    .ri-block__showDetails
      display inline-block
      width 100%
      position relative
      @media screen and (min-width: $ri-breakpoint-minSmall)
        transform translateX(50%)
        width auto
        right -2 * $ri-baseMargin
      @media screen and (min-width: $ri-breakpoint-minMedium)
        right -5 * $ri-baseMargin
</style>
