<template lang="pug">
  #app
    ri-menu
    img(src="./assets/logo.png")
    router-view
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

  html
    font-size 62.5%

  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    margin 0 auto
    max-width $ri-body-maxWidth
</style>
