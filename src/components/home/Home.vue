<template lang="pug">
.ri-home
  h1.ri-home__title(v-t="'home.title'")
  h2.ri-home__subtitle(v-t="'home.subtitle'")
  .ri-home__container
    img.ri-home__photo(src="/assets/photos/photo-home.jpg", :alt="t('home.photo')")
    .ri-home__content
      p.ri-home__text(v-t="'home.text'")
      ul.ri-home__contactDetails.ri-contactDetails
        li.ri-contactDetails__item
          span.ri-home__location(v-t="'home.location'")
        li.ri-contactDetails__item
          a.ri-home__phone(href="tel:+33695221626") +33 6 95 22 16 26
        li.ri-contactDetails__item
          a.ri-home__email(href="mailto:pierre.martin@live.com") pierre.martin@live.com
      MarkdownViewer.ri-home__pdfResume(:input="t('home.pdf')")
      ul.ri-home__links
        li
          a(href="https://github.com/rempartIrien", target="_blank")
            img.ri-home__linkImage(:src="githubLogoUrl", :alt="t('home.github')", target="_blank" rel="noopener noreferrer nofollow")
        li
          a(href="https://twitter.com/RempartIrien", target="_blank")
            img.ri-home__linkImage.ri-home__linkImage--large(src="/assets/logos/logo-twitter.svg", :alt="t('home.twitter')", target="_blank" rel="noopener noreferrer nofollow")
        li
          a(href="https://www.linkedin.com/in/pierremartin2", target="_blank")
            img.ri-home__linkImage(src="/assets/logos/logo-linkedin.png", :alt="t('home.twitter')", target="_blank" rel="noopener noreferrer nofollow")
</template>

<script lang="ts">
  import { ComputedRef, computed, defineComponent } from 'vue';
  import { useI18n } from 'vue-i18n';

  import MarkdownViewer from '../../common/MarkdownViewer.vue';
  import { useTheme } from '../../common/theme.composer';

  export default defineComponent({
    name: 'Home',
    components: {
      MarkdownViewer
    },
    setup() {
      const { t } = useI18n();
      const { isDarkMode } = useTheme();
      const githubLogoUrl: ComputedRef<string> = computed(() =>
        isDarkMode.value
          ? '/assets/logos/logo-github-dark.png'
          : '/assets/logos/logo-github-light.png'
      );
      return { t, githubLogoUrl };
    }
  });
</script>

<style lang="stylus" scoped>
  @import '../../style/variables';
  @import '../../style/mixins';

  $ri-home-imageSize = 6.4rem;
  $ri-home-iconSize = 2 * $ri-baseMargin

  .ri-home
    ri-m-bodyMaxWidth()

    &__title
      ri-m-titleText(, 3.5rem);
      padding: 2 * $ri-baseMargin 0 $ri-baseMargin 0;

      @media screen and (min-width: $ri-breakpoint-minMedium)
        ri-m-titleText(, 4rem);
        padding: 2 * $ri-baseMargin 0 $ri-baseMargin 0;

    &__subtitle
      ri-m-titleText(var(--color-secondary));
      padding-bottom: 2 * $ri-baseMargin;

    &__container
      ri-m-part();
      display: flex;
      overflow: hidden;
      flex-direction: column-reverse;

      @media screen and (min-width: $ri-breakpoint-minMedium)
        flex-direction: row;

    &__photo,
    &__content
      @media screen and (min-width: $ri-breakpoint-minMedium)
        padding: 3 * $ri-baseMargin;

    &__photo
      object-fit: contain;
      width: 100%;
      align-self: center;

      @media screen and (min-width: $ri-breakpoint-minSmall)
        margin: 0 auto;
        width: 50%;

      @media screen and (min-width: $ri-breakpoint-minMedium)
        padding-right: 4 * $ri-baseMargin;
        margin: 0;
        width: 40%;
        // On webkit, the photo takes a huge hieght wihtout this...
        max-height: 70vh;

    &__content
      flex: 1;

      @media screen and (min-width: $ri-breakpoint-minMedium)
        padding-left: 2 * $ri-baseMargin;
        border-left: $ri-borderWidth solid var(--color-secondary);

    &__text
      ri-m-subtitleText(var(--color-text));
      padding-bottom: $ri-baseMargin;
      text-align: justify;

      @media screen and (min-width: $ri-breakpoint-minMedium)
        text-align: left;

    &__links,
    &__contactDetails
      ri-m-unstyleList();
      padding: 2 * $ri-baseMargin;

    &__pdfResume
      padding: $ri-baseMargin;

    &__links
      display: flex;
      align-items: center;
      justify-content: space-around;

    &__linkImage
      width: auto;
      height: $ri-home-imageSize;

      &--large
        height: 1.5 * $ri-home-imageSize;

    &__phone,
    &__email
      ri-m-link()

    &__location,
    &__phone,
    &__email
      display flex
      align-items flex-start

      &::before
        display inline-block
        content ''
        margin 0 $ri-baseMargin

    &__location::before
      ri-m-icon(
        '/assets/icons/location.svg',
        $ri-home-iconSize,
        $ri-home-iconSize,
        var(--color-secondary)
      )

    &__phone::before
      ri-m-icon(
        '/assets/icons/phone.svg',
        $ri-home-iconSize,
        $ri-home-iconSize,
        var(--color-secondary)
      )

    &__email::before
      ri-m-icon(
        '/assets/icons/email.svg',
        $ri-home-iconSize,
        $ri-home-iconSize,
        var(--color-secondary)
      )

  .ri-contactDetails
    &__item
      & + &
        padding-top: $ri-baseMargin;
</style>
