/**
 * Created by gaby on 7/4/17.
 */
import {
  DISPLAY_QUANTITY_UPDATED,
} from './constants';

/**
 * Dispatched when the user updates the AppHeader SearchBar
 *
 * @param {number} quantity The number of items to be displayed at a time
 *
 * @return {object}        An action object with a type of DISPLAY_QUANTITY_UPDATED and
 *                         the number of items to be displayed at a time
 */
export function updatePerPageQuantity(quantity) {
  return {
    type: DISPLAY_QUANTITY_UPDATED,
    quantity,
  };
}
