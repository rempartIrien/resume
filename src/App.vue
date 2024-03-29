<template lang="pug">
.ri-app
  AppMenu.ri-app__menu
  .ri-app__container
    router-view.ri-app__view
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";

import AppMenu from "./common/AppMenu.vue";

export default defineComponent({
	name: "App",
	components: {
		AppMenu,
	},
	setup() {
		// With mobile devices, browsers hide and show toolbars, but these
		// toolbars are taken into account in the 100vh computation.
		// So we need to dynamically recompute the screen size.
		// See https://dev.to/maciejtrzcinski/100vh-problem-with-ios-safari-3ge9
		const setAppHeight: () => void = () => {
			const doc: HTMLElement = document.documentElement;
			doc.style.setProperty("--app-height", `${window.innerHeight}px`);
		};

		onMounted(() => {
			window.addEventListener("resize", setAppHeight);
			setAppHeight();
		});
		onUnmounted(() => {
			window.removeEventListener("resize", setAppHeight);
		});
	},
});
</script>

<style lang="stylus">
@import './style/variables'
@import './style/mixins'

:root
 --app-height 100vh
 --color-primary #c44536
 --color-secondary #772e25
 --color-tertiary #197278
 --color-text #283d3b
 --color-background #fcf9f7

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
  background-color var(--color-background)
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
