/**
 * Created by gaby on 8/16/17.
 */

import messages from '../Forms/messages';

import { translationMessages } from '../../i18n';
import { FIELD_NAMES } from './constants'

export const validate = (values, props) => {
  const { locale, validateRow } = props;

  const errors = {};

  // Contains translation messages
  const formattedMessages = translationMessages[locale];

  if (!values.get(FIELD_NAMES.requirements)) {
    errors.requirements = formattedMessages[messages.validationRequiredLabel.id];
  } else if (values.get(FIELD_NAMES.requirements).length > 700) {
    errors.requirements = 'Cant be more than 700 characters';
  } else if (values.get(FIELD_NAMES.requirements).length < 10) {
    errors.requirements = 'Need a minimum of 10 characters';
  }

  return errors;
};

export const warn = (values) => {
  const warnings = {};
  /*
   * If you think of any warning; Add them here.
   *
   * To-Do Remove text warnings
   */

  return warnings;
};
