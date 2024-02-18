<template lang="pug">
ol.ri-tagList
	li.ri-tagList__item(v-for="tag in tags", :key="tag") {{ tag }}
</template>

<script lang="ts">
import { PropType } from "vue";
import { defineComponent } from "vue";

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

  &__item
    display inline-block

    &:not(:last-child):after
      content ','
      display inline-block
      padding-right 0.5rem
</style>
