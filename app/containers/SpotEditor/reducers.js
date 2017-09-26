/**
 * Created by gaby on 6/25/17.
 */
import { fromJS } from 'immutable';

import {
  DISPLAY_ALERT,
  LOAD_CURRENT_SPOT,
  ERROR_CREATING_SPOT,
  ERROR_UPDATING_SPOT,
  SPOT_FIELDS,
  UPDATE_CURRENT_SPOT,
  UPDATE_CURRENT_SPOT_ADD_IMAGE,
  UPDATE_CURRENT_SPOT_ADDRESS,
  UPDATE_CURRENT_SPOT_COST,
  UPDATE_CURRENT_SPOT_DESC,
  UPDATE_CURRENT_SPOT_DIFFICULTY,
  UPDATE_CURRENT_SPOT_LAT,
  UPDATE_CURRENT_SPOT_LNG,
  UPDATE_CURRENT_SPOT_LOCATION,
  UPDATE_CURRENT_SPOT_NAME,
  UPDATE_CURRENT_SPOT_REMOVE_IMAGE,
  UPDATE_CURRENT_SPOT_TYPE,
} from './constants';

import { SPOT_TYPES } from '../../constants';

const initialState = fromJS({
  displayAlert: false,
  currentSpotId: '-1',
  currentSpot: {
    _id: null,
    geo_point: null,
    name: null,
    description: null,
    type: SPOT_TYPES[1],
    location: {},
    images: [],
    cost: 0,
    difficulty: 2.0,
  },
  currentSpotSelected: false,
  errorWhileCreatingSpot: false,
  errorWhileUpdatingSpot: false,
});

function spotEditorReducer(state = initialState, action) {
  const currentSpot = state.get('currentSpot');

  switch (action.type) {
    case DISPLAY_ALERT:
      return state.set('displayAlert', action.flag);

    case LOAD_CURRENT_SPOT:
      return state
        .set('currentSpot', action.spot)
        .set('currentSpotSelected', true);

    case ERROR_CREATING_SPOT:
      return state.set('errorWhileCreatingSpot', action.flag);

    case ERROR_UPDATING_SPOT:
      return state.set('errorWhileUpdatingSpot', action.flag);

    case UPDATE_CURRENT_SPOT:
      return state.set('currentSpotId', action.spotId);

    case UPDATE_CURRENT_SPOT_ADD_IMAGE:
      // To-Do
      return state;

    case UPDATE_CURRENT_SPOT_ADDRESS:
      currentSpot.location.address = action.address;
      return state.set('currentSpot', currentSpot);

    case UPDATE_CURRENT_SPOT_COST:
      currentSpot.cost = action.cost;
      return state.set('currentSpot', currentSpot);

    case UPDATE_CURRENT_SPOT_DESC:
      currentSpot.description = action.description;
      return state.set('currentSpot', currentSpot);

    case UPDATE_CURRENT_SPOT_DIFFICULTY:
      currentSpot.difficulty = action.difficulty;
      return state.set('currentSpot', currentSpot);

    case UPDATE_CURRENT_SPOT_LAT:
      currentSpot.location.location[1] = action.lat;
      currentSpot.geo_point = `${action.lat},${currentSpot.location.location[0]}`;
      return state.set('currentSpot', currentSpot);

    case UPDATE_CURRENT_SPOT_LNG:
      currentSpot.location.location[0] = action.lng;
      currentSpot.geo_point = `${currentSpot.location.location[1]},${action.lng}`;
      return state.set('currentSpot', currentSpot);

    case UPDATE_CURRENT_SPOT_LOCATION:
      currentSpot.location.location = [action.lng, action.lat];
      currentSpot.geo_point = `${action.lat},${action.lng}`;
      return state.set('currentSpot', currentSpot);

    case UPDATE_CURRENT_SPOT_NAME:
      currentSpot.name = action.name;
      return state.set('currentSpot', currentSpot);

    case UPDATE_CURRENT_SPOT_REMOVE_IMAGE:
      if (currentSpot.images[action.index]._id === action.id) { // eslint-disable-line
        // remove item at index action.index
        currentSpot.images.splice(action.index, 1);
      }
      return state.set('currentSpot', currentSpot);

    case UPDATE_CURRENT_SPOT_TYPE:
      currentSpot.type = action.spotType;
      return state.set('currentSpot', currentSpot);

    default:
      return (state);
  }
}

export default spotEditorReducer;
