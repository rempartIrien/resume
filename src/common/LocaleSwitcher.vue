<template lang="pug">
ul.ri-localeSwitcher__list
  li.ri-localeSwitcher__item
    button.ri-localeSwitcher__locale(@click="() => setLocale('en')", title="Switch to English") 🇬🇧
  li.ri-localeSwitcher__item
    button.ri-localeSwitcher__locale(@click="() => setLocale('fr')", title="Passer en français") 🇫🇷
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useI18n } from 'vue-i18n';

  import { Locale } from '../i18n';

  export default defineComponent({
    name: 'LocaleSwitcher',
    setup() {
      const { locale } = useI18n();
      const setLocale: (locale: Locale) => void = (newLocale: Locale) => {
        locale.value = newLocale;
      };

      return { setLocale };
    }
  });
</script>

<style lang="stylus" scoped>
  @import '../style/variables'
  @import '../style/mixins'

  .ri-localeSwitcher
    &__list
      ri-m-unstyleList()
      display flex

    &__item
      display flex
      align-items center
      & + &
        margin-left $ri-baseMargin

    &__locale
      ri-m-buttonReset()
      font-size $ri-menu-titleFontSize
</style>
