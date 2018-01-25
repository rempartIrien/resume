<template lang="pug">
  ol.ri-photos
    li.ri-photos__item.ri-photos__item--portrait
      img(src="../../assets/photos/photo-miyajima.jpg", :alt="$t('miyajima')")
    li.ri-photos__item.ri-photos__item--portrait
      img(src="../../assets/photos/photo-gundam.jpg", :alt="$t('gundam')")
    li.ri-photos__item
      img(src="../../assets/photos/photo-matsumoto.jpg", :alt="$t('matsumoto')")
    li.ri-photos__item.ri-photos__item--portrait
      img(src="../../assets/photos/photo-montreal.jpg", :alt="$t('montreal')")
    li.ri-photos__item
      img(src="../../assets/photos/photo-toronto.jpg", :alt="$t('toronto')")
</template>

<script>
export default {
  name: 'RiPhotos'
};
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

<i18n>
  {
    "en": {
      "gundam": "Gundam photo",
      "matsumoto": "Matsumoto Castle photo",
      "miyajima": "Miyajima shrink photo",
      "montreal": "Montreal photo",
      "toronto": "Toronto photo"
    },
    "fr": {
      "gundam": "Photo du Gundam",
      "matsumoto": "Photo du château de Matsumoto",
      "miyajima": "Photo du sanctuaire de Miyajima",
      "montreal": "Photo de Montréal",
      "toronto": "Photo de Toronto"
    }
  }
</i18n>



