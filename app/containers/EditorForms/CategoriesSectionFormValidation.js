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
  const formattedMessages = translationMessages[locale];

  if (!values.get(FIELD_NAMES.categories) || !values.get(FIELD_NAMES.categories).size) {
    // Make sure there at minimum 1 category dropbox in screen
    errors.categories = { _error: 'You must add one category at minimum' };
  } else if ( values.get(FIELD_NAMES.categories).size > 2) {
    // Limit the number of categories to 5
    errors.categories = { _error: 'You cannot have more 2 categories. Remove one to continue.' };
  } else {
    // If there is at minimum 1 category dropbox in screen, make sure that
    // they all populated before allowing user to add a new one.
    const categoryErrors = [];

    const categories = values.get(FIELD_NAMES.categories);

    categories.map((value, index_i) => {

      // Look for empty values
      if(!value.size || !value.get(FIELD_NAMES.category) || value.get(FIELD_NAMES.category) === 'DEFAULT' ) {
        //categoryErrors[index_i] = { category: formattedMessages[messages.validationRequiredLabel.id] };
        errors.categories = { _error: 'You must make sure all boxes are populated!' };
        return errors; // exit if any of the values are empty
      } else {
        // Look for duplicated values
        const category = value.get(FIELD_NAMES.category);
        categories.map((value, index_j) => {
          if( (index_i !== index_j) && (value.constructor !== Object) && category === value.get(FIELD_NAMES.category)) {
            categoryErrors[index_i] = { category: 'Cannot have duplicated values' };
          }
        });
      }
    });

    if(categoryErrors.length ){
      errors.categories = categoryErrors;
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
