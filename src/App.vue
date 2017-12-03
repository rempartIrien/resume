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
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
</style>
