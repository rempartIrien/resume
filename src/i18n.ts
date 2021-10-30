import { I18n, createI18n as _createI18n } from 'vue-i18n';

import en from '../locales/en.json';
import fr from '../locales/fr.json';

export const SUPPORTED_LOCALES: string[] = ['en', 'fr'];

export function createI18n(): I18n {
  return _createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en,
      fr
    }
  });
}
