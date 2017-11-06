/**
 * Created by gaby on 6/25/17.
 */
import { fromJS } from 'immutable';

import {
  CURRENT_SECTION,
  OBJECT_SELECTED,
  HOME_SECTIONS,
  UPDATE_IMAGE,
} from './constants';

const initialState = fromJS({
  currentSection: HOME_SECTIONS.home,
  ongoingPackages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  uncompletedPackages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  currentImage: fromJS({
    url: "http://img1.ak.crunchyroll.com/i/spire4/a8c6638ecde1ae6b66a0b3f994836db21491147238_full.jpg",
    data: {},
  }),
});


function homePageReducer(state = initialState, action) {
  switch (action.type) {
    // Object represents a spot, spotter or user
    case CURRENT_SECTION:
      return state
        .set('currentSection', action.section);
    case UPDATE_IMAGE:
      return state
        .setIn(['currentImage', 'url'], action.url)
        .setIn(['currentImage', 'data'], action.data);
    default:
      return (state);
  }
}

export default homePageReducer;
