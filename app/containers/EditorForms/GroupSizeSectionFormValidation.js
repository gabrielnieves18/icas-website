/**
 * Created by gaby on 8/16/17.
 */
import React from 'react';
import messages from '../Forms/messages';

import { translationMessages } from '../../i18n';
import { FIELD_NAMES } from './constants'

export const validate = (values, props) => {
  const { locale, validateRow } = props;

  const errors = {};

  // Contains translation messages
  const formattedMessages = translationMessages[locale];

  if (!values.get(FIELD_NAMES.groupSize)) {
    errors.groupSize = formattedMessages[messages.validationRequiredLabel.id];
  } else if (values.get(FIELD_NAMES.groupSize) > 100) {
    errors.groupSize = 'Minimum group size Can\'t be more than 100';
  } else if (values.get(FIELD_NAMES.groupSize) < 1) {
    errors.groupSize = 'Minimum group size Can\'t be more than 1';
  }

  return errors;
};

export const warn = (values) => {
  const warnings = {};
  if (values.get(FIELD_NAMES.groupSize)) {
    const groupSize = Number(values.get(FIELD_NAMES.groupSize));

    if (!Number.isInteger(groupSize)) {
      warnings.groupSize = `You cannot have part of a person.
                        Final minimum group size will be ${Math.ceil(groupSize)}`;
    }
  }

  return warnings;
};
