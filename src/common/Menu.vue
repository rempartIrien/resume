<template lang="pug">
div.ri-menu
  .ri-menu__title
    button.ri-menu__toggle(type="button", @click="() => toggleMenu()") {{ t('menu.menu') }}
  ul.ri-menu__list(:class="{ 'ri-s-visible': isMenuVisible }")
    li.ri-menu__item(v-for="route in routes", :key="route.path")
      router-link.ri-menu__link(:to="route.path", exact-active-class="ri-s-active") {{ t(route.meta.translationKey) }}
  LocaleSwitcher.ri-menu__locales
</template>

<script lang="ts">
  import {
    ComputedRef,
    Ref,
    computed,
    defineComponent,
    onMounted,
    ref
  } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { RouteRecordRaw, Router, useRouter } from 'vue-router';

  import { routes as ROUTES } from '../routes';

  import LocaleSwitcher from './LocaleSwitcher.vue';

  export default defineComponent({
    name: 'Menu',
    components: { LocaleSwitcher },
    setup() {
      const router: Router = useRouter();
      const { t } = useI18n();
      const routes: ComputedRef<RouteRecordRaw[]> = computed(() => ROUTES);
      const isMenuVisible: Ref<boolean> = ref(false);

      const toggleMenu: () => void = () =>
        (isMenuVisible.value = !isMenuVisible.value);

      onMounted(() => {
        // Hide menu after every route change.
        router.beforeEach((to, from, next) => {
          isMenuVisible.value = false;
          next();
        });
      });

      return { t, routes, isMenuVisible, toggleMenu };
    }
  });
</script>

<style lang="stylus" scoped>
  @import '../style/variables'
  @import '../style/mixins'

  $ri-menu-toggleSize = 3rem
  $ri-menu-iconPath = '/assets/icons/menu.svg'

  .ri-menu
    position relative
    z-index 1
    display flex

    &::after
      content ''
      z-index 2
      height $ri-borderWidth
      background-color var(--color-secondary)
      position absolute
      bottom 0
      left 50%
      transform translateX(-50%)
      width 100%
      max-width $ri-body-maxWidth

    &__title,
    &__locales
      z-index 1
      padding $ri-baseMargin 2 * $ri-baseMargin

    &__title
      position relative
      @media screen and (min-width: $ri-breakpoint-minMedium)
        display none

    &__locales
      margin-left auto

    &__toggle
      ri-m-buttonReset()
      display flex
      align-items center

      &::before
        display inline-block
        content ''
        margin-right $ri-baseMargin
        ri-m-icon(
          $ri-menu-iconPath,
          $ri-menu-toggleSize,
          $ri-menu-toggleSize,
          var(--color-secondary)
        )

    &__list
      ri-m-unstyleList()
      position absolute
      margin 0
      width 100%
      height 100vh
      padding 2 * $ri-baseMargin
      padding-top $ri-baseMargin
      bottom 0
      transform translateY(0)
      transition transform 250ms ease-in-out
      border-bottom $ri-borderWidth solid var(--color-secondary)
      @media screen and (min-width: $ri-breakpoint-minMedium)
        border-bottom 0
        position static
        width auto
        height auto
        padding $ri-baseMargin

      &.ri-s-visible
        transform translateY(100%)
        @media screen and (min-width: $ri-breakpoint-minMedium)
          transform translateY(0)

    &__title,
    &__list
      background-color var(--color-background)

    &__item
      display block
      padding $ri-baseMargin 0
      @media screen and (min-width: $ri-breakpoint-minMedium)
        display inline-block
        padding 0 $ri-baseMargin

    &__link,
    &__toggle
      &,
      &:visited
        ri-m-text(var(--color-secondary), $ri-menu-titleFontSize)
        text-decoration none

      &:hover,
      &:active,
      &.ri-s-active
        color var(--color-primary)

    &__link
      &:hover,
      &:active
        text-decoration underline

    &__toggle
      &:hover,
      &:active
        &::before
          ri-m-icon(
            $ri-menu-iconPath,
            $ri-menu-toggleSize,
            $ri-menu-toggleSize,
            var(--color-primary)
          )
</style>
