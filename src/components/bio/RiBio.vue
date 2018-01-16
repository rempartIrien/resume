<template lang="pug">
  .ri-bio
    h1.ri-bio__title(v-t="'title'")
    p.ri-bio__intro(v-t="'intro'")
    .ri-bio__chapter
      ri-education.ri-bio__main
      .ri-bio__aside
        h2.ri-bio__subtitle(v-t="'engineer.title'")
        p.ri-bio__description(v-t="'engineer.description'")
    .ri-bio__chapter
      ri-skills.ri-bio__main
      .ri-bio__aside
        h2.ri-bio__subtitle(v-t="'javascript.title'")
        p.ri-bio__description(v-t="'javascript.description'")
    .ri-bio__chapter
      ri-conferences.ri-bio__main
      .ri-bio__aside
        h2.ri-bio__subtitle(v-t="'ux.title'")
        p.ri-bio__description(v-t="'ux.description'")
</template>

<script>
  import RiSkills from './RiSkills';
  import RiEducation from './RiEducation';
  import RiConferences from './RiConferences';

  export default {
    name: 'RiBio',
    components: {
      RiEducation,
      RiSkills,
      RiConferences
    }
  };
</script>

<style lang="stylus" scoped>
  @import '../../style/variables';
  @import '../../style/mixins';

  .ri-bio
    ri-m-bodyMaxWidth()

    &__title
      ri-m-pageTitle()
      padding $ri-baseMargin 0

    &__intro
      ri-m-pageSubtitle()
      padding 0
      padding-bottom 4 * $ri-baseMargin

    &__chapter
      display flex
      padding-bottom 4 * $ri-baseMargin

    &__aside
      flex 2
      border-left $ri-borderWidth solid $ri-secondaryColor
      padding-right 4 * $ri-baseMargin
      padding-left 2 * $ri-baseMargin

    &__main
      flex 3
      padding $ri-baseMargin
      padding-left 4 * $ri-baseMargin
      padding-right 6 * $ri-baseMargin

    &__subtitle
      ri-m-titleText()
      padding-bottom $ri-baseMargin

    &__description
      ri-m-text()

</style>

<i18n>
  {
    "en": {
      "title": "Still in progress",
      "intro": "Let me tell you more about me and why you can read this today.",
      "engineer": {
        "title": "Engineer",
        "description": "I chose my job and I love my job. Even without speaking of software, I wanted to be engineer to think and make things. Around 20, I wanted to build phones, so I had to choose a telecom engineering school. And... well, for naive and young people, software and electronics do not seem so far from telecom. Today, I can assure you, I am really happy to be a software engineer!"
      },
      "javascript": {
        "title": "JavaScript",
        "description": "I guess that like many students I first learnt Java and only PHP for the web. I discovered JavaScript by sheer luck one year after my graduation and what a shock! At the beginning I was totally lost: there were vanilla JS, Backbone.js, canvas API... Then, I saw all the ecosystem built around this language and all the web concepts, including CSS and HTML subtleties. I loved it."
      },
      "ux": {
         "title": "User experience",
         "description": "Although I am a frontend developer, I am interested in Node.js and everything about JavaScript and web. Besides, another topic keeps fascinating me: user experience. Today, I can implement interfaces and that is good but not enough. Tomorrow, I want to imagine them and be able to advise people about how to reach the best experience."
       }
    },
    "fr": {
       "title": "Toujours en cours",
       "intro": "Laissez-moi vous en dire plus sur moi et ce qui m'a conduit à l'homme que je suis.",
       "engineer": {
         "title": "Ingénieur",
         "description": ""
       },
       "javascript": {
        "title": "JavaScript",
        "description": ""
      },
      "ux": {
         "title": "Expérience utilisateur",
         "description": ""
       }
    }
  }
</i18n>
