/**
 * Created by gaby on 8/16/17.
 */

import messages from '../Forms/messages';

import { translationMessages } from '../../i18n';
import { FIELD_NAMES } from './constants'

export const validate = (values, props) => {
  const { locale, validateRow } = props;

  const errors = {};
  const title = values.get(FIELD_NAMES.rendezvousTitle);
  const description = values.get(FIELD_NAMES.rendezvousDescription);

  // Contains translation messages
  const formattedMessages = translationMessages[locale];

  if (!title) {
    errors.rendezvousTitle = formattedMessages[messages.validationRequiredLabel.id];
  } else if (title.length > 40) {
    errors.rendezvousTitle = 'Cant be more than 40 characters';
  } else if (title.length < 5) {
    errors.rendezvousTitle = 'Need a minimum of 5 characters';
  }

  // if (!description) {
  //   errors.rendezvousDescription = formattedMessages[messages.validationRequiredLabel.id];
  // } else if (description.length > 700) {
  //   errors.rendezvousDescription = 'Cant be more than 700 characters';
  // } else if (description.length < 10) {
  //   errors.rendezvousDescription = 'Need a minimum of 10 characters';
  // }

  return errors;
};

export const warn = (values) => {
  const warnings = {};

  const description = values.get(FIELD_NAMES.rendezvousDescription);

  if (!description || description.length < 1) {
    warnings.rendezvousDescription = 'This could be very helpful to your customers!';
  }

  return warnings;
};
