<template lang="pug">
  #app
    ri-menu
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
  @import './style/mixins'

  html
    // Set 1rem to 10px
    font-size 62.5%

  body
    ri-m-regularText()
    background-color $ri-backgroundColor

  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    margin 0 auto
    max-width $ri-body-maxWidth
</style>
