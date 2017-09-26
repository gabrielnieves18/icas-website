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
