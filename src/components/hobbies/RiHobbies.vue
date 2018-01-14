<template lang="pug">
  .ri-hobbies
    .ri-hobbies__title(v-t="'title'")
    .ri-hobbies__intro(v-t="'intro'")
    .ri-hobbies__part
      ol.ri-hobbies__aside.ri-music
        each val in [1, 2, 3, 4, 5, 6]
          li.ri-music__vinyl
      .ri-hobbies__main
        .ri-hobbies__subtitle(v-t="'music.title'")
        .ri-hobbies__description(v-t="'music.description'")
    .ri-hobbies__part
      ri-photos.ri-hobbies__aside
      .ri-hobbies__main
        h2.ri-hobbies__subtitle(v-t="'travel.title'")
        p.ri-hobbies__description(v-t="'travel.description'")
    .ri-hobbies__part
      ol.ri-hobbies__aside.ri-code
        li.ri-code__character {
        li.ri-code__character code
        li.ri-code__character }
      .ri-hobbies__main
        h2.ri-hobbies__subtitle(v-t="'code.title'")
        p.ri-hobbies__description(v-t="'code.description'")
</template>

<script>
import RiPhotos from './RiPhotos';

export default {
  name: 'RiHobbies',
  components: {
    RiPhotos
  }
};
</script>

<style lang="stylus" scoped>
  @import '../../style/variables';
  @import '../../style/mixins';

  ri-m-vinyl($centerColor = $ri-tertiaryColor, $vinylColor = #232323)
    display inline-block
    border 0.5rem solid $ri-darkGray
    height 8vw
    width 8vw
    border-radius 50%
    background-image radial-gradient(circle at center,
      transparent 0,
      transparent 2%,
      $centerColor 2%,
      $centerColor,
      $centerColor 25%,
      $vinylColor 25%,
      $vinylColor 100%
    )

  .ri-hobbies
    ri-m-bodyMaxWidth()

    &__title
      ri-m-pageTitle()
      padding $ri-baseMargin 0

    &__intro
      ri-m-pageSubtitle()
      padding 0
      padding-bottom 4 * $ri-baseMargin

    &__part
      display flex
      padding-bottom 4 * $ri-baseMargin

    &__subtitle
      ri-m-titleText()
      padding-bottom $ri-baseMargin

    &__description
      ri-m-regularText()

    &__main
      padding 0 2 * $ri-baseMargin
      border-left $ri-borderWidth solid $ri-secondaryColor
      flex 1

    &__aside
      flex 1
      padding 0 4 * $ri-baseMargin
      text-align center

  .ri-music
    ri-m-unstyleList()
    border-radius 50%

    &__vinyl
      ri-m-vinyl()

      &:nth-of-type(1)
        transform translate(75%, 30%)

      &:nth-of-type(2)
        ri-m-vinyl($ri-primaryColor)
        transform translate(130%, 40%)

      &:nth-of-type(3)
        ri-m-vinyl($ri-secondaryColor)
        transform translate(-40%, 10%)

      &:nth-of-type(4)
        transform translate(-210%, 100%)

      &:nth-of-type(5)
        transform translate(50%, -45%)

      &:nth-of-type(6)
        z-index -1
        transform translate(-20%, 0%) rotate(5deg)

  .ri-code
    ri-m-unstyleList()
    font-size 4 * $ri-fontSize--title
    display flex
    align-items center

    &__character
      display inline-block
      color $ri-primaryColor

      &:first-of-type,
      &:last-of-type
        flex 1
        color $ri-tertiaryColor

      &:first-of-type
        text-align right

      &:last-of-type
        text-align left

</style>

<i18n>
  {
    "en": {
      "title": "The other me",
      "intro": "Not to waste time, I have some activities to spend it more cleverly.",
      "music": {
        "title": "Music everywhere",
        "description": "When trying to write these lines, I realized how difficult it is to explain what music means to me. I could tell you why I have always listened to music, why I hate radios or why I listen to a lof of indie rock nowadays but even with all of this I'm sure my words would not be strong enough. That's precisely why I love music: it's a powerful emotion vector. That's because music is art. And there are dozens and dozens of different emotions, which makes music an endless field of possibilities!"
      },
      "travel": {
        "title": "World and people",
        "description": "Traveling is the best way to discover new things and meet different people. Living a whole year in Montreal was a wonderful experience and it changed me: I became a better man, more open-minded. That's the same for other travels: beyond touristic attractions, there are different customs and it's very interesting to discover them and learning why they exist. And last but not least: there is food!"
      },
      "code": {
        "title": "Endless work",
        "description": "Coding is a passion of mine and I made some little productions for my personal use. Of course, these résumé is one of them. Sometimes, projects are very simple; however, this is important to keep thinking about how to make things and not just copy and paste without noticing what's inside. The second point is to improve myself and learn new things that I cannot experiment at work. At last, computer sceince is just wonderful and let people make unbelievable things with just a keyboard and imagination and that's the funny part!"
      }
    },
    "fr": {
      "title": "Loisirs",
      "music": {
        "title": "",
        "description": "",
        "more": ""
      }
    }
  }
</i18n>



