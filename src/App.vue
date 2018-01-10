<template lang="pug">
  #app.ri-app
    ri-menu.ri-app__menu
    .ri-app__container
      router-view.ri-app__view
</template>

<script>
import RiMenu from './components/menu/RiMenu';

export default {
  name: 'app',
  components: {
    RiMenu
  }
};
</script>

<style lang="stylus">
  @import './style/variables'
  @import './style/mixins'

  html
    // Set 1rem to 10px
    font-size 62.5%

  body
    ri-m-regularText()
    background-color $ri-backgroundColor
    height 100vh
    line-height 1.5

  .ri-app
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    display flex
    flex-direction column
    margin 0 auto
    height 100%

    &__menu,
    &__container
      padding "0 calc(%s - %s)" % ((100vw / 2) ($ri-body-maxWidth / 2))

    &__container
      flex 1
      overflow auto

    &__view
      padding 0 2 * $ri-baseMargin

</style>
