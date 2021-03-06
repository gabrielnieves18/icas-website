import { createSelector } from 'reselect';
import { formValueSelector } from 'redux-form/immutable';

/**
 * Direct selector to the languageToggle state domain
 */
const selectLanguage = (state) => state.get('language');


/**
 * Select the language locale
 */
const makeSelectLocale = () => createSelector(
  selectLanguage,
  (languageState) => languageState.get('locale')
);

export {
  selectLanguage,
  makeSelectLocale,
};
