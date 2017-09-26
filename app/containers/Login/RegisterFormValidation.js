/**
 * Created by gaby on 8/16/17.
 */
import messages from './messages';

import { translationMessages } from '../../i18n';

export const validate = (values, props) => {
  const errors = {};

  // Contains translation messages
  const formattedMessages = translationMessages[props.locale];

  if (!values.get('firstName')) {
    errors.firstName = formattedMessages[messages.validationRequiredLabel.id];
  }

  if (!values.get('lastName')) {
    errors.lastName = formattedMessages[messages.validationRequiredLabel.id];
  }

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

  if (!values.get('password_1')) {
    errors.password_1 = formattedMessages[messages.validationRequiredLabel.id];
  }

  if (!values.get('password_2')) {
    errors.password_2 = formattedMessages[messages.validationRequiredLabel.id];
  } else if (values.get('password_1') && values.get('password_2')) {
    if (values.get('password_1').toString() !== values.get('password_2').toString()) {
      errors.password_2 = formattedMessages[messages.validationPasswordMismatchLabel.id];
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
