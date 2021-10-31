import { I18n, createI18n as _createI18n } from 'vue-i18n';

import en from '../locales/en.json';
import fr from '../locales/fr.json';

export enum Locale {
  English = 'en',
  French = 'fr'
}

export type I18nString = Record<Locale, string>;

export function createI18n(): I18n {
  return _createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      [Locale.English]: en,
      [Locale.French]: fr
    }
  });
}
