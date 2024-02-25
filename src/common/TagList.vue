<template lang="pug">
ol.ri-tagList
	li.ri-tagList__item(v-for="tag in tags", :key="tag") {{ tag }}
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";

export default defineComponent({
	name: "TagList",
	props: {
		tags: {
			required: true,
			type: Object as PropType<string[]>,
		},
	},
});
</script>

<style lang="stylus" scoped>
@import '../style/variables'
@import '../style/mixins'

.ri-tagList
	ri-m-unstyleList()
	ri-m-regularText(var(--color-secondary))
	display inline-flex
	flex-wrap wrap
	gap 1 * $ri-baseMargin

	&__item
		display inline-block
		border-radius $ri-borderRadius
		border 1px solid var(--color-tertiary)
		padding 0.25 * $ri-baseMargin 0.5 * $ri-baseMargin
</style>
