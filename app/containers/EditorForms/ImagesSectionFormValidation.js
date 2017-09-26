/**
 * Created by gaby on 8/16/17.
 */

import messages from '../Forms/messages';

import { translationMessages } from '../../i18n';
import { FIELD_NAMES } from './constants'

export const validate = (values, props) => {
  const { locale } = props;

  const errors = {};
  const images = values.get(FIELD_NAMES.images);

  console.log('Values:', images);

  // Contains translation messages
  const formattedMessages = translationMessages[locale];

  if (!images || !images.size) {
    // Make sure there at minimum 1 image dropbox in screen
    errors.images = { image: formattedMessages[messages.validationRequiredLabel.id] };
  } else if ( images.size > 10) {
    // Limit the number of images to 5
    errors.images = { _error: 'You cannot have more 10 images. Remove one to continue.' };
  } else if ( images.size < 2) {
    errors.images = { _error: 'You must add one image at minimum' };
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
