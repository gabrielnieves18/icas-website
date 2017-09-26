/**
 * Created by gaby on 8/16/17.
 */
import messages from './messages';

import { translationMessages } from '../../i18n';

export const validate = (values, props) => {
  const errors = {};

  // Contains translation messages
  const formattedMessages = translationMessages[props.locale];

  if (!values.get('email')) {
    errors.email = formattedMessages[messages.validationRequiredLabel.id];
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
    errors.email = formattedMessages[messages.validationInvalidEmailLabel.id];
  }

  if (!values.get('password')) {
    errors.password = formattedMessages[messages.validationRequiredLabel.id];
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
