<template lang="pug">
.ri-education
  .ri-school
    h2.ri-school__name(v-t="'profile.education.polytechnique.title'")
    p.ri-school__date(v-t="'profile.education.polytechnique.date'")
    p.ri-school__degree(v-t="'profile.education.polytechnique.degree'")
  .ri-school
    h2.ri-school__name(v-t="'profile.education.ensisa.title'")
    p.ri-school__date(v-t="'profile.education.ensisa.date'")
    p.ri-school__degree(v-t="'profile.education.ensisa.degree'")
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Education'
  });
</script>

<style lang="stylus" scoped>
  @import '../../style/variables'
  @import '../../style/mixins'

  .ri-school
    & + &
      margin-top 2 * $ri-baseMargin

    &__name
      ri-m-subtitleText($ri-tertiaryColor)
      padding 0.5 * $ri-baseMargin 0

    &__date
      ri-m-text($ri-tertiaryColor)

    &__degree
      ri-m-text()
</style>
