/**
 * Created by gaby on 6/25/17.
 */
import { fromJS } from 'immutable';

import {
  DISPLAY_QUANTITY_UPDATED,
} from './constants';

const initialState = fromJS({
  displayQuantity: 10,
});


function displayPerPageDropdownReducer(state = initialState, action) {
  switch (action.type) {
    // The number of object cards to display on the page
    case DISPLAY_QUANTITY_UPDATED:
      return state
        .set('displayQuantity', action.quantity);
    default:
      return state;
  }
}

export default displayPerPageDropdownReducer;
