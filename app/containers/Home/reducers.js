/**
 * Created by gaby on 6/25/17.
 */
import { fromJS } from 'immutable';

import {
  CURRENT_SECTION,
  OBJECT_SELECTED,
  HOME_SECTIONS,
} from './constants';

const initialState = fromJS({
  currentSection: HOME_SECTIONS.home,
  ongoingPackages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  uncompletedPackages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
});


function homePageReducer(state = initialState, action) {
  switch (action.type) {
    // Object represents a spot, spotter or user
    case CURRENT_SECTION:
      return state
        .set('currentSection', action.section);
    default:
      return (state);
  }
}

export default homePageReducer;
