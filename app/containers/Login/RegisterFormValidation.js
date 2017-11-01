/**
 * Created by gaby on 8/16/17.
 */
import messages from './messages';

import { translationMessages } from '../../i18n';

export const validate = (values, props) => {
  const errors = {};

  const USERNAME_LENGTH = 25;

  // Contains translation messages
  const formattedMessages = translationMessages[props.locale];

  if (!values.get('firstName')) {
    errors.firstName = formattedMessages[messages.validationRequiredLabel.id];
  }

  if (!values.get('lastName')) {
    errors.lastName = formattedMessages[messages.validationRequiredLabel.id];
  }

  if (!values.get('username_1')) {
    errors.username_1 = formattedMessages[messages.validationRequiredLabel.id];
  } else if (values.get('username_1').toString().length > USERNAME_LENGTH) {
    errors.username_1 = `Username cannot be longer than ${USERNAME_LENGTH} characters long.`;
  }

  if (!values.get('username_2')) {
    errors.username_2 = formattedMessages[messages.validationRequiredLabel.id];
  } else if (values.get('username_1') && values.get('username_2')) {
    if (values.get('username_1').toString() !== values.get('username_2').toString()) {
      errors.username_2 = formattedMessages[messages.validationEmailMismatchLabel.id];
    }
  }

  if (!values.get('password_1')) {
    errors.password_1 = formattedMessages[messages.validationRequiredLabel.id];
  } else if (!/^([A-Z]{2})(\w{4,8})(\W{2,6})/i.test(values.get('password_1'))) {
    errors.password_1 = 'Wrong Format! Use the following format in the order that is presented: 2 upper case letters, 4 to 8 alphanumeric characters, 2 to 6 symbols or special characters';
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
