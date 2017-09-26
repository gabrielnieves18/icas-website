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

  if (!values.get(FIELD_NAMES.packingList) || !values.get(FIELD_NAMES.packingList).size) {
    // Make sure there at minimum 1 category dropbox in screen
    errors.packingList = { _error: 'You must add one category at minimum' };
  } else if ( values.get(FIELD_NAMES.packingList).size > 15) {
    // Limit the number of packing items to 15
    errors.packingList = { _error: 'You cannot have more than 15 packing items. Remove one to continue.' };
  } else {
    const listItemErrors = [];

    const packingList = values.get(FIELD_NAMES.packingList);

    packingList.map((value, index_i) => {
      // Look for empty values
      if( !value.size || !value.get(FIELD_NAMES.packingListItem) ) {
        //listItemErrors[index_i] = { category: formattedMessages[messages.validationRequiredLabel.id] };
        errors.packingList = { _error: 'You must make sure that no text field is empty!' };
        return errors; // exit if any of the values are empty
      } else if ( value.get(FIELD_NAMES.packingListItem).length > 40 ) {
        listItemErrors[index_i] = { packingListItem: 'Item name cannot be more than 40 chars long' };
        return errors; // exit if any of the values are empty
      } else if ( value.get(FIELD_NAMES.packingListItem).length < 3 ) {
        listItemErrors[index_i] = { packingListItem: 'Item name cannot be less than 3 chars long' };
        return errors; // exit if any of the values are empty
      } else {
        // Look for duplicated values
        const packingListItem = value.get(FIELD_NAMES.packingListItem);
        packingList.map((value, index_j) => {
          if( (index_i !== index_j) && (value.constructor !== Object) && packingListItem === value.get(FIELD_NAMES.packingListItem)) {
            listItemErrors[index_i] = { packingListItem: 'Cannot have duplicated values' };
          }
        });
      }
    });

    if(listItemErrors.length ){
      errors.packingList = listItemErrors;
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
