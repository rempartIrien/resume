<template lang="pug">
ol.ri-photos
  li.ri-photos__item.ri-photos__item--portrait
    img(src="/assets/photos/photo-miyajima.jpg", :alt="t('hobbies.travel.photos.miyajima')")
  li.ri-photos__item.ri-photos__item--portrait
    img(src="/assets/photos/photo-gundam.jpg", :alt="t('hobbies.travel.photos.gundam')")
  li.ri-photos__item
    img(src="/assets/photos/photo-matsumoto.jpg", :alt="t('hobbies.travel.photos.matsumoto')")
  li.ri-photos__item.ri-photos__item--portrait
    img(src="/assets/photos/photo-montreal.jpg", :alt="t('hobbies.travel.photos.montreal')")
  li.ri-photos__item
    img(src="/assets/photos/photo-toronto.jpg", :alt="t('hobbies.travel.photos.toronto')")
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useI18n } from 'vue-i18n';

  export default defineComponent({
    setup() {
      const { t } = useI18n();
      return { t };
    },
    name: 'Photos'
  });
</script>

<style lang="stylus" scoped>
  @import '../../style/variables'
  @import '../../style/mixins'

  $ri-photoSize = 36%

  .ri-photos
    ri-m-unstyleList()
    padding 0 2 * $ri-baseMargin
    @media screen and (min-width: $ri-breakpoint-minMedium)
      padding-right 4 * $ri-baseMargin

    &__item
      width $ri-photoSize
      display inline-block

      img
        width 100%

      &--portrait
        width 0.75 * $ri-photoSize

      &:nth-of-type(1)
        transform translate(15%, 25%) rotate(-5deg)

      &:nth-of-type(2)
        transform translate(110%, 35%) rotate(20deg)

      &:nth-of-type(3)
        transform translate(-80%, 5%) rotate(-10deg)

      &:nth-of-type(4)
        transform translate(10%, -10%) rotate(-5deg)

      &:nth-of-type(5)
        transform translate(-10%, -45%) rotate(5deg)
</style>
