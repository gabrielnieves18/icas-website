/**
 * Created by gaby on 7/4/17.
 * LoginPage selectors
 */

import { createSelector } from 'reselect';

const selectDisplayPerPageDropdown = (state) => state.get('displayPerPage');

const makeSelectDisplayQuantity = () => createSelector(
  selectDisplayPerPageDropdown,
  (displayPerPageState) => displayPerPageState.get('displayQuantity')
);

export {
  selectDisplayPerPageDropdown,
  makeSelectDisplayQuantity,
};
