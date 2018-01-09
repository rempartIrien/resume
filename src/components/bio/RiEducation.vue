<template lang="pug">
  div
    h2(v-t="'title'")
    .ri-school
      h2.ri-school__name(v-t="'ensisa.title'")
      p.ri-school__date(v-t="'ensisa.date'")
      p.ri-school__degree(v-t="'ensisa.degree'")
    .ri-school
      h2.ri-school__name(v-t="'polytechnique.title'")
      p.ri-school__date(v-t="'polytechnique.date'")
      p.ri-school__degree(v-t="'polytechnique.degree'")
</template>

<script>
  export default {
    name: 'RiEducation'
  };
</script>

<style lang="stylus" scoped>
  @import '../../style/variables';
  @import '../../style/mixins';

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
      "title": "Education",
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
    },
    "fr": {
      "title": "Formation",
     "ensisa": {
        "title": "École Nationale Supérieure d'Ingénieurs Sud Alsace (ENSISA)",
        "date": "2009 à 2012",
        "degree": "Diplôme d'ingénieur en Informartique et Réseaux"
      },
      "polytechnique": {
        "title": "École Polytechnique de Montréal",
        "date": "2011 à 2012",
        "degree": "Certificat en Génie Informatique"
      }
    }
  }
</i18n>
