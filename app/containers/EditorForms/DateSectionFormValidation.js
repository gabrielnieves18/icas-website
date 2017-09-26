/**
 * Created by gaby on 8/16/17.
 */

import messages from '../Forms/messages';

import { translationMessages } from '../../i18n';
import { FIELD_NAMES } from './constants'

export const validate = (values, props) => {
  const { locale } = props;

  const errors = {};

  // Contains translation messages
  const formattedMessages = translationMessages[props.locale];

  if (!values.get(FIELD_NAMES.startingDay)) {
    errors.startingDay = formattedMessages[messages.validationRequiredLabel.id];
  }

  if (!values.get(FIELD_NAMES.startingTime)) {
    errors.startingTime = formattedMessages[messages.validationRequiredLabel.id];
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
