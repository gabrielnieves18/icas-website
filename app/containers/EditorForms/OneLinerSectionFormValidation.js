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

  if (!values.get(FIELD_NAMES.oneLiner)) {
    errors.oneLiner = formattedMessages[messages.validationRequiredLabel.id];
  } else if (values.get(FIELD_NAMES.oneLiner).length > 40) {
    errors.oneLiner = 'Cant be more than 40 characters';
  } else if (values.get(FIELD_NAMES.oneLiner).length < 5) {
    errors.oneLiner = 'Need a minimum of 5 characters';
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
