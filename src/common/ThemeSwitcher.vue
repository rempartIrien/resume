<template lang="pug">
div
  button.ri-themeSwitcher(@click="() => toggle()")
    span.ri-themeSwitcher__icon(:class="{ 'ri-s-active': !isDarkMode }")
      span.ri-themeSwitcher__sun
    span.ri-themeSwitcher__icon(:class="{ 'ri-s-active': isDarkMode }")
      span.ri-themeSwitcher__moon
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import { useTheme } from './theme.composer';

  export default defineComponent({
    name: 'ThemeSwitcher',
    setup() {
      const { isDarkMode, toggle } = useTheme();

      return { toggle, isDarkMode };
    }
  });
</script>

<style lang="stylus" scoped>
  @import '../style/variables'
  @import '../style/mixins'

  $ri-themeSwitcher-iconSize = 2rem

  .ri-themeSwitcher
    ri-m-buttonReset()
    font-size $ri-fontSize
    background var(--color-background)
    box-shadow inset 0 0 0 2px var(--color-secondary)
    display flex
    align-items center
    border-radius 4rem

    &__icon
      border-radius 50%
      width 3rem
      height 3rem
      border 2px solid transparent
      display flex
      align-items center
      justify-content center

      &.ri-s-active
        background var(--color-secondary)
        border-color var(--color-secondary)

        .ri-themeSwitcher__moon,
        .ri-themeSwitcher__sun
          background-color var(--color-background)

    &__moon,
    &__sun
      display block

    &__moon
      ri-m-icon(
        '/assets/icons/dark_mode.svg',
        $ri-themeSwitcher-iconSize,
        $ri-themeSwitcher-iconSize,
        var(--color-text)
      )

    &__sun
      display block
      ri-m-icon(
        '/assets/icons/light_mode.svg',
        $ri-themeSwitcher-iconSize,
        $ri-themeSwitcher-iconSize,
        var(--color-text)
      )
</style>
