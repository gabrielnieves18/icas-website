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

  if (!values.get(FIELD_NAMES.price)) {
    errors.price = formattedMessages[messages.validationRequiredLabel.id];
  } else if (values.get(FIELD_NAMES.price) > 500) {
    errors.price = 'Can\'t be more than $500';
  } else if (values.get(FIELD_NAMES.price) < 1) {
    errors.price = 'Needs to be at least $1';
  }

  return errors;
};

export const warn = (values) => {
  const warnings = {};
  if (values.get(FIELD_NAMES.price)) {
    const price = Number(values.get(FIELD_NAMES.price));

    if (!Number.isInteger(price)) {
      warnings.price = `The price per peron has to be an integer. 
                        We will round up this value to the closest higher integer.
                        Final price will be \$${Math.ceil(price)}`;
    }
  }

  return warnings;
};
