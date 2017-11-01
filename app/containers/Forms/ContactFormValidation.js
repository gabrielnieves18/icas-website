/**
 * Created by gaby on 8/16/17.
 */
import messages from './messages';

import { translationMessages } from '../../i18n';

export const validate = (values, props) => {
  const errors = {};

  const PHONE_NUMBER_LENGTH = 10;

  // Contains translation messages
  const formattedMessages = translationMessages[props.locale];

  if (!values.get('email_1')) {
    errors.email_1 = formattedMessages[messages.validationRequiredLabel.id];
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email_1'))) {
    errors.email_1 = formattedMessages[messages.validationInvalidEmailLabel.id];
  }

  if (!values.get('email_2')) {
    errors.email_2 = formattedMessages[messages.validationRequiredLabel.id];
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email_2'))) {
    errors.email_2 = formattedMessages[messages.validationInvalidEmailLabel.id];
  } else if (values.get('email_1') && values.get('email_2')) {
    if (values.get('email_1').toString() !== values.get('email_2').toString()) {
      errors.email_2 = formattedMessages[messages.validationEmailMismatchLabel.id];
    }
  }

  if (!values.get('phone_number_1')) {
    errors.phone_number_1 = formattedMessages[messages.validationRequiredLabel.id];
  } else if (!/^\d+$/.test(values.get('phone_number_1'))) {
    errors.phone_number_1 = 'Invalid Phone number format';
  } else if (values.get('phone_number_1').toString().length > PHONE_NUMBER_LENGTH) {
    errors.phone_number_1 = 'Too many Numbers';
  } else if (values.get('phone_number_1').toString().length < PHONE_NUMBER_LENGTH) {
    errors.phone_number_1 = 'Phone number is too short. Is it a real number?';
  }

  if (!values.get('phone_number_2')) {
    errors.phone_number_2 = formattedMessages[messages.validationRequiredLabel.id];
  } else if (!/^\d+$/.test(values.get('phone_number_2'))) {
    errors.phone_number_2 = 'Invalid Phone number format';
  } else if (values.get('phone_number_2').toString().length > PHONE_NUMBER_LENGTH) {
    errors.phone_number_2 = 'Too many Numbers';
  } else if (values.get('phone_number_2').toString().length < PHONE_NUMBER_LENGTH) {
    errors.phone_number_2 = 'Phone number is too short. Is it a real number?';
  } else if (values.get('phone_number_1') && values.get('phone_number_2')) {
    if (values.get('phone_number_1').toString() !== values.get('phone_number_2').toString()) {
      errors.phone_number_2 = 'Phone number does not match';
    }
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
