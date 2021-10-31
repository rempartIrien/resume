<template lang="pug">
.ri-app
  Menu.ri-app__menu
  .ri-app__container
    router-view.ri-app__view
</template>

<script lang="ts">
  import { defineComponent, onMounted, onUnmounted } from 'vue';

  import Menu from './common/Menu.vue';

  export default defineComponent({
    name: 'App',
    components: {
      Menu
    },
    setup() {
      // With mobile devices, browsers hide and show toolbars, but these
      // toolsbars are taken into account in the 100vh computation.
      // So we need to dynamically recompute the csreen size.
      // See https://dev.to/maciejtrzcinski/100vh-problem-with-ios-safari-3ge9
      const appHeight: () => void = () => {
        const doc: HTMLElement = document.documentElement;
        doc.style.setProperty('--app-height', `${window.innerHeight}px`);
      };

      onMounted(() => {
        window.addEventListener('resize', appHeight);
        appHeight();
      });
      onUnmounted(() => {
        window.removeEventListener('resize', appHeight);
      });
    }
  });
</script>

<style lang="stylus">
  @import './style/variables'
  @import './style/mixins'

  :root
   --app-height 100vh

  html
    // Set 1rem to 10px
    font-size 62.5%
    box-sizing border-box

    *,
    *::before,
    *::after
      box-sizing inherit

  body
    ri-m-regularText()
    background-color $ri-backgroundColor
    height var(--app-height)
    line-height 1.5
    // Thanks IE and Edge!
    overflow: hidden;

  #app,
  .ri-app
    height 100%

  .ri-app
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    display flex
    flex-direction column
    margin 0 auto

    &__menu,
    &__container
      padding "0 calc(%s - %s)" % ((100vw / 2) ($ri-body-maxWidth / 2))

    &__container
      flex 1
      overflow auto
      -webkit-overflow-scrolling touch

    &__view
      padding 0 2 * $ri-baseMargin
</style>
