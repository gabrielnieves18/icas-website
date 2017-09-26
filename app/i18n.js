/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import esLocaleData from 'react-intl/locale-data/es';

import { DEFAULT_LOCALE } from './containers/App/constants';
import enTranslationMessages from './translations/en.json';
import esTranslationMessages from './translations/es.json';

export const LOCALE_i18n_MAP = {
  english: { description: 'English', value: 'en' },
  spanish: { description: 'Español', value: 'es' },
};

export const LOCALE_i18n_MAP_OFFERINGS = {
  DEFAULT:      { description: '', value: 'default' },

  // afrikaans:    { description: 'Afrikaans', value: 'af' },
  // albanian:     { description: 'Albanian', value: 'aq' },
  // arabic:       { description: 'Arabic', value: 'ar' },
  // basque:       { description: 'Basque', value: 'eu' },
  // bulgarian:    { description: 'Bulgarian', value: 'bg' },
  // byelorussian: { description: 'Byelorussian', value: 'be' },
  // catalan:      { description: 'Catalan', value: 'ca' },
  // croatian:     { description: 'Croatian', value: 'hr' },
  // czech:        { description: 'Czech', value: 'cs' },
  // danish:       { description: 'Danish', value: 'da' },
  // dutch:        { description: 'Dutch', value: 'nl' },
  english:      { description: 'English', value: 'en' },
  // esperanto:    { description: 'Esperanto', value: 'eo' },
  // estonian:     { description: 'Estonian', value: 'et' },
  // faroese:      { description: 'Faroese', value: 'fo' },
  // finnish:      { description: 'Finnish', value: 'fi' },
  // french:       { description: 'French', value: 'fr' },
  // galician:     { description: 'Galician', value: 'gl' },
  // german:       { description: 'German', value: 'de' },
  // greek:        { description: 'Greek', value: 'el' },
  // hebrew:       { description: 'Hebrew', value: 'iw' },
  // hungarian:    { description: 'Hungarian', value: 'hu' },
  // icelandic:    { description: 'Icelandic', value: 'is' },
  // inuit:        { description: 'Inuit', value: 'Eskimo' },
  // irish:        { description: 'Irish', value: 'ga' },
  // italian:      { description: 'Italian', value: 'it' },
  // japanese:     { description: 'Japanese', value: 'ja' },
  // korean:       { description: 'Korean', value: 'ko' },
  // latvian:      { description: 'Latvian', value: 'lv' },
  // lithuanian:   { description: 'Lithuanian', value: 'lt' },
  // macedonian:   { description: 'Macedonian', value: 'mk' },
  // maltese:      { description: 'Maltese', value: 'mt' },
  // norwegian:    { description: 'Norwegian', value: 'no' },
  // polish:       { description: 'Polish', value: 'pl' },
  // portuguese:   { description: 'Portuguese', value: 'pt' },
  // romanian:     { description: 'Romanian', value: 'ro' },
  // russian:      { description: 'Russian', value: 'ru' },
  // scottish:     { description: 'Scottish', value: 'gd' },
  // serbian:      { description: 'Serbian', value: 'sr' },
  // slovak:       { description: 'Slovak', value: 'sk' },
  // slovenian:    { description: 'Slovenian', value: 'sl' },
  spanish:      { description: 'Spanish', value: 'es' },
  // swedish:      { description: 'Swedish', value: 'sv' },
  // turkish:      { description: 'Turkish', value: 'tr' },
  // ukrainian:    { description: 'Ukrainian', value: 'uk' },
};

const {
  english,
  spanish,
} = LOCALE_i18n_MAP;

addLocaleData(enLocaleData);
addLocaleData(esLocaleData);

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    let message = messages[key];
    if (!message && locale !== DEFAULT_LOCALE) {
      message = defaultFormattedMessages[key];
    }
    return Object.assign(formattedMessages, { [key]: message });
  }, {});
};

export const translationMessages = {
  en: formatTranslationMessages(english.value, enTranslationMessages),
  es: formatTranslationMessages(spanish.value, esTranslationMessages),
};
