<template lang="pug">
  ul.ri-menu
    li(v-for="route in routes")
      router-link(:to="route.path") {{ route.data.translationKey }}
</template>

<script>
import ROUTES from '../routes';

export default {
  name: 'RiMenu',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  computed: {
    routes: () => ROUTES
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h1, h2
  font-weight normal

ul
  list-style-type: none
  padding: 0

li
  display: inline-block
  margin: 0 10px

a
  color #42b983

</style>
