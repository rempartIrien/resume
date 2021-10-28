<template lang="pug">
  .ri-home
    h1.ri-home__title(v-t="'title'")
    h2.ri-home__subtitle(v-t="'subtitle'")
    .ri-home__container
      img.ri-home__photo(src="../../assets/photos/photo-home.jpg", :alt="$t('photo')")
      .ri-home__content
        p.ri-home__text(v-t="'text'")
        ul.ri-home__contactDetails.ri-contactDetails
          li.ri-contactDetails__item
            span.ri-icon.ri-icon--location
            span(v-t="'location'")
          li.ri-contactDetails__item
            span.ri-icon.ri-icon--phone
            span +33 6 95 22 16 26
          li.ri-contactDetails__item
            span.ri-icon.ri-icon--envelop
            a.ri-home__email(href="mailto:pierre.martin@live.com") pierre.martin@live.com
        vue-markdown.ri-home__pdfResume(:anchorAttributes="{ target: '_blank' }") {{ $t('pdf') }}
        ul.ri-home__links
          li
            a(href="https://github.com/rempartIrien", target="_blank")
              img.ri-home__linkImage(src="../../assets/logos/logo-github.png", :alt="$t('github')", target="_blank")
          li
            a(href="https://twitter.com/RempartIrien", target="_blank")
              img.ri-home__linkImage.ri-home__linkImage--large(src="../../assets/logos/logo-twitter.svg", :alt="$t('twitter')", target="_blank")
          li
            a(href="https://www.linkedin.com/in/pierremartin2", target="_blank")
              img.ri-home__linkImage(src="../../assets/logos/logo-linkedin.png", :alt="$t('twitter')", target="_blank")
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  name: 'RiHome',
  components: {
    VueMarkdown
  }
};
</script>

<style lang="stylus" scoped>
@import '../../style/variables';
@import '../../style/mixins';

$ri-home-imageSize = 6.4rem;

.ri-home {
  ri-m-bodyMaxWidth();

  &__title {
    ri-m-titleText(, 3.5rem);
    padding: 2 * $ri-baseMargin 0 $ri-baseMargin 0;

    @media screen and (min-width: $ri-breakpoint-minMedium) {
      ri-m-titleText(, 4rem);
      padding: 2 * $ri-baseMargin 0 $ri-baseMargin 0;
    }
  }

  &__subtitle {
    ri-m-titleText($ri-secondaryColor);
    padding-bottom: 2 * $ri-baseMargin;
  }

  &__container {
    ri-m-part();
    display: flex;
    overflow: hidden;
    flex-direction: column-reverse;

    @media screen and (min-width: $ri-breakpoint-minMedium) {
      flex-direction: row;
    }
  }

  &__photo, &__content {
    @media screen and (min-width: $ri-breakpoint-minMedium) {
      padding: 3 * $ri-baseMargin;
    }
  }

  &__photo {
    object-fit: contain;
    width: 100%;
    align-self: center;

    @media screen and (min-width: $ri-breakpoint-minSmall) {
      margin: 0 auto;
      width: 50%;
    }

    @media screen and (min-width: $ri-breakpoint-minMedium) {
      padding-right: 4 * $ri-baseMargin;
      margin: 0;
      width: 40%;
      // On webkit, the photo takes a huge hieght wihtout this...
      max-height: 70vh;
    }
  }

  &__content {
    flex: 1;

    @media screen and (min-width: $ri-breakpoint-minMedium) {
      padding-left: 2 * $ri-baseMargin;
      border-left: $ri-borderWidth solid $ri-secondaryColor;
    }
  }

  &__text {
    ri-m-subtitleText($ri-textColor);
    padding-bottom: $ri-baseMargin;
    text-align: justify;

    @media screen and (min-width: $ri-breakpoint-minMedium) {
      text-align: left;
    }
  }

  &__links, &__contactDetails {
    ri-m-unstyleList();
    padding: 2 * $ri-baseMargin;
  }

  &__pdfResume {
    padding: $ri-baseMargin;

    /deep/ {
      > p {
        // Remove default style in generated HTML by markdown tag
        margin: 0;
      }

      a {
        ri-m-link();
      }
    }
  }

  &__links {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  &__linkImage {
    width: auto;
    height: $ri-home-imageSize;

    &--large {
      height: 1.5 * $ri-home-imageSize;
    }
  }

  &__email {
    ri-m-link();
  }
}

.ri-contactDetails {
  &__item {
    padding: 0 $ri-baseMargin;

    & + & {
      padding-top: $ri-baseMargin;
    }
  }

  .ri-icon {
    padding: 0 $ri-baseMargin;
    color: $ri-secondaryColor;
  }
}
</style>

<i18n>
  {
    "en": {
      "title": "Pierre Martin-Henry",
      "subtitle": "Frontend software engineer interested in UX",
      "text": "Welcome aboard! I am Pierre and I made this online résumé to make you know me a little more. Enjoy the trip!",
      "github": "GitHub logo",
      "twitter": "Twitter logo",
      "location": "Gignac-La-Nerthe, France",
      "pdf": "[Here](./resume.pdf) is my French resume in PDF format."
    },
    "fr": {
      "title": "Pierre Martin-Henry",
      "subtitle": "Ingénieur logiciel frontend intéressé par l'UX",
      "text": "Bienvenue à bord ! Je suis Pierre et j'ai réalisé ce CV en ligne pour que vous appreniez à mieux me connaître. Profitez du voyage !",
      "github": "logo GitHub",
      "twitter": "logo Twitter",
      "location": "Gignac-La-Nerthe, France",
      "pdf": "[Voici](./resume.pdf) mon CV au format PDF."
    }
  }
</i18n>

