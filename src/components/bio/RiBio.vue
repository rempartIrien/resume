<template lang="pug">
  .ri-bio
    h1.ri-bio__title(v-t="'title'")
    p.ri-bio__intro(v-t="'intro'")
    .ri-bio__chapter
      .ri-bio__main
        h2.ri-bio__subtitle(v-t="'engineer.title'")
        p.ri-bio__description(v-t="'engineer.description'")
      aside.ri-bio__aside
        .ri-school
          h2.ri-school__name(v-t="'engineer.aside.ensisa.title'")
          p.ri-school__date(v-t="'engineer.aside.ensisa.date'")
          p.ri-school__degree(v-t="'engineer.aside.ensisa.degree'")
        .ri-school
          h2.ri-school__name(v-t="'engineer.aside.polytechnique.title'")
          p.ri-school__date(v-t="'engineer.aside.polytechnique.date'")
          p.ri-school__degree(v-t="'engineer.aside.polytechnique.degree'")
    .ri-bio__chapter
      .ri-bio__main
        h2.ri-bio__subtitle(v-t="'javascript.title'")
        p.ri-bio__description(v-t="'javascript.description'")
      aside.ri-bio__aside
        ul.ri-skills
          li.ri-skills__item JavaScript, Angular, VueJS, Jasmine
          li.ri-skills__item HTML, Pug
          li.ri-skills__item CSS, Stylus, Sass
          li.ri-skills__item English, French
          li.ri-skills__item Git
          li.ri-skills__item Java, Spring
    .ri-bio__chapter
      .ri-bio__main
        h2.ri-bio__subtitle(v-t="'ux.title'")
        p.ri-bio__description(v-t="'ux.description'")
    h1 DOTJS
</template>

<script>
  export default {
    name: 'RiBio'
  };
</script>

<style lang="stylus" scoped>
  @import '../../style/variables';
  @import '../../style/mixins';

  .ri-bio
    ri-m-bodyMaxWidth();

    &__title
      ri-m-pageTitle();
      padding: $ri-baseMargin 0;

    &__intro
      ri-m-pageSubtitle();
      padding: 0;
      padding-bottom: 4 * $ri-baseMargin;

    &__chapter
      display flex
      &:nth-child(even)
        flex-direction row-reverse

    &__main,
    &__aside
      padding 4 * $ri-baseMargin

    &__main
      flex 3

    &__aside
      flex 2

    &__subtitle
      ri-m-titleText()

    &__description
      ri-m-text()

  .ri-school
    &__name
      ri-m-subtitleText($ri-tertiaryColor)

    &__date
      ri-m-text($ri-tertiaryColor)

    &__degree
      ri-m-text()

</style>

<i18n>
  {
    "en": {
      "title": "Still in progress",
      "intro": "Let me tell you more about me and why you can read this today.",
      "engineer": {
        "title": "Engineer",
        "description": "I chose my job and I love my job. Even without speaking of software, I wanted to be engineer to think and make things. Around 20, I wanted to buuld phones, so I had to choose a telecom engineering school. And... well, for naive and young people, software and electronics do not seem so far from telecom. Today, I can assure you, I am really happy to be a software engineer!",
        "aside": {
          "ensisa": {
            "title": "École Nationale Supérieure d'Ingénieurs Sud Alsace (ENSISA)",
            "date": "2009 to 2012",
            "degree": "Engineer's degree (French \"Grandes Écoles\") in Compter Science and Networks"
          },
          "polytechnique": {
            "title": "École Polytechnique de Montréal",
            "date": "2011 to 2012",
            "degree": "Certificate in Computer Software Engineering"
          }
        }
      },
      "javascript": {
        "title": "JavaScript",
        "description": "I guess that as many students I first learnt Java and only PHP for the web. I discovered JavaScript by sheer luck one year after my graduation and what a shock! At the beginning I was totally lost: there were vanilla JS, Backbone.js, canvas API... Then, I saw all the ecosystem built around this language and all the web concepts, including CSS and HTML subleties. I loved it."
      },
      "ux": {
         "title": "User experience",
         "description": "I am a plain frontend developer, I will not pretend to be a fullstack developer. I do not have advanced backend skills; besides, I am interested in another domain: user experience. Today, I can implement interfaces and that is good but not enough. Tomorrow, I want to imagine them and to able to advise people about how to reach the best experience."
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
