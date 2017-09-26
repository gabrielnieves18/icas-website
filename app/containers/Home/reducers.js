/**
 * Created by gaby on 6/25/17.
 */
import { fromJS } from 'immutable';

import {
  CURRENT_SECTION,
  OBJECT_SELECTED,
  PREVIOUS_PAGE,
  NEXT_PAGE,
  HOME_SECTIONS,
} from './constants';

/**
 * currentPageIndex starts at 0, so that it could be used, as is, when calculating
 * The satartIndex and maxIndex for the data batches to be requested from the back end.
 *
 * To see an example go to the sagas.js file withing this component.
 *
 * There we calculate the start and max indexes required for our API using the
 * currentPage index as a variable for that particular state.
 *
 */
const initialState = fromJS({
  currentPageIndex: 0,
  currentSection: HOME_SECTIONS.home,
  ongoingPackages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  uncompletedPackages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  paginationCount: 20, // Tha max number of pages available
});


function homePageReducer(state = initialState, action) {
  const currentPageIndex = state.get('currentPageIndex');

  switch (action.type) {
    // Object represents a spot, spotter or user
    case CURRENT_SECTION:
      return state
        .set('currentSection', action.section);
    case PREVIOUS_PAGE:
      // If the current page index is higher than 1
      // Allow backwards paging. Otherwise, ignore and return current state.
      if (currentPageIndex > 0) {
        return state.set('currentPageIndex', (currentPageIndex - 1));
      }
      return (state);
    case NEXT_PAGE:
      // If the current page index is lower than the max number of pages available
      // Allow forward paging. Otherwise, ignore and return current state.
      if (currentPageIndex <= state.get('paginationCount')) {
        return state.set('currentPageIndex', (currentPageIndex + 1));
      }
      return (state);
    default:
      return (state);
  }
}

export default homePageReducer;
