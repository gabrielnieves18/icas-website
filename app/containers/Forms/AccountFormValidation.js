/**
 * Created by gaby on 8/16/17.
 */
import messages from './messages';

import { translationMessages } from '../../i18n';

export const validate = (values, props) => {
  const errors = {};

  // Contains translation messages
  const formattedMessages = translationMessages[props.locale];

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

export const warn = (values, props) => {
  const warnings = {};

  // Contains translation messages
  const formattedMessages = translationMessages[props.locale];

  const passwordWeak = formattedMessages[messages.validationPasswordWeakLabel.id];

  /*
   * If you think of any warning; Add them here.
   *
   * To-Do Remove text warnings
   */
  if (values.get('password_1') && values.get('password_1').length < 12) {
    warnings.password_1 = passwordWeak;
  }

  if (values.get('password_2') && values.get('password_2').length < 12) {
    warnings.password_2 = passwordWeak;
  }
  return warnings;
};
