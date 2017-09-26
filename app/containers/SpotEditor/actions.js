/**
 * Created by gaby on 7/4/17.
 */
import {
  DISPLAY_ALERT,
  CREATE_NEW_SPOT,
  ERROR_CREATING_SPOT,
  ERROR_UPDATING_SPOT,
  LOAD_CURRENT_SPOT,
  UPDATE_CURRENT_SPOT,
  UPDATE_CURRENT_SPOT_ADD_IMAGE,
  UPDATE_CURRENT_SPOT_ADDRESS,
  UPDATE_CURRENT_SPOT_COST,
  UPDATE_CURRENT_SPOT_DESC,
  UPDATE_CURRENT_SPOT_DIFFICULTY,
  UPDATE_CURRENT_SPOT_IN_SERVER,
  UPDATE_CURRENT_SPOT_LAT,
  UPDATE_CURRENT_SPOT_LNG,
  UPDATE_CURRENT_SPOT_LOCATION,
  UPDATE_CURRENT_SPOT_NAME,
  UPDATE_CURRENT_SPOT_REMOVE_IMAGE,
  UPDATE_CURRENT_SPOT_TYPE,
} from './constants';

/**
 * Dispatched when an alert should be displayed
 *
 * @param {boolean} flag A Flag
 *
 * @return {object}        To-do
 */
export function displayAlert(flag) {
  return {
    type: DISPLAY_ALERT,
    flag,
  };
}

/**
 * Dispatched when the user submits the form in the spot editor
 * and the current spot has no ID (creating a spot)
 *
 * @param {object} spot The spot object
 *
 * @return {object}        To-do
 */
export function createNewSpot(spot) {
  return {
    type: CREATE_NEW_SPOT,
    spot,
  };
}

/**
 * Dispatched when the server response to a spot creation
 *
 * @param {boolean} flag Should be true is response code is within [200-250] otherwise, false
 *
 * @return {object}        To-do
 */
export function errorWhileCreatingSpot(flag) {
  return {
    type: ERROR_CREATING_SPOT,
    flag,
  };
}

/**
 * Dispatched when the server response to a spot update
 *
 * @param {boolean} flag Should be true is response code is within [200-250] otherwise, false
 *
 * @return {object}        To-do
 */
export function errorWhileUpdatingSpot(flag) {
  return {
    type: ERROR_UPDATING_SPOT,
    flag,
  };
}

/**
 * Dispatched when the user updates the AppHeader SearchBar
 *
 * @param {object} spot The object containing the full spot payload from the server
 *
 * @return {object}        An action object with a type of LOAD_CURRENT_SPOT and the request payload array of objects
 */
export function loadSpotData(spot) {
  return {
    type: LOAD_CURRENT_SPOT,
    spot,
  };
}

/**
* Dispatched when the user adds a new image to the spot
*
* @param {object} payload To-Do
*
* @return {object}        To-do
*/
export function updateCurrentSpotAddImage(payload) {
  return {
    type: UPDATE_CURRENT_SPOT_ADD_IMAGE,
    payload,
  };
}

/**
 * Dispatched when the user edits the spot address
 *
 * @param {string} address The new spot address
 *
 * @return {object}        To-do
 */
export function updateCurrentSpotAddress(address) {
  return {
    type: UPDATE_CURRENT_SPOT_ADDRESS,
    address,
  };
}

/**
 * Dispatched when the user edits the spot address
 *
 * @param {number} cost The cost related to visiting this spot
 *
 * @return {object}        To-do
 */
export function updateCurrentSpotCost(cost) {
  return {
    type: UPDATE_CURRENT_SPOT_COST,
    cost,
  };
}

/**
 * Dispatched when the user updates the AppHeader SearchBar
 *
 * @param {string} spotId The spot id
 *
 * @return {object}        An action object with a type of UPDATE_CURRENT_SPOT and the request payload array of objects
 */
export function updateSpotData(spotId) {
  return {
    type: UPDATE_CURRENT_SPOT,
    spotId,
  };
}

/**
 * Dispatched when the user edits the spot description
 *
 * @param {string} description A simple description about the spot. For example:
 *                             what to expect from this trip, things to do, etc...
 *
 * @return {object}        To-do
 */
export function updateCurrentSpotDesc(description) {
  return {
    type: UPDATE_CURRENT_SPOT_DESC,
    description,
  };
}

/**
 * Dispatched when the user edits the spot difficulty
 *
 * @param {number} difficulty A number from 1 - 5 representative of how difficult it is to visit this spot.
 *
 * @return {object}        To-do
 */
export function updateCurrentSpotDifficulty(difficulty) {
  return {
    type: UPDATE_CURRENT_SPOT_DIFFICULTY,
    difficulty,
  };
}

/**
 * Dispatched when the user submits the form in the spot editor
 * and the current spot has an ID
 *
 * @param {object} spot The spot object
 *
 * @return {object}        To-do
 */
export function updateCurrentSpotInServer(spot) {
  return {
    type: UPDATE_CURRENT_SPOT_IN_SERVER,
    spot,
  };
}

/**
 * Dispatched when the user edits the spot latitude
 *
 * @param {number} lat The spot location latitude.
 *
 * @return {object}        To-do
 */
export function updateCurrentSpotLat(lat) {
  return {
    type: UPDATE_CURRENT_SPOT_LAT,
    lat,
  };
}

/**
 * Dispatched when the user edits the spot longitude
 *
 * @param {number} lng The spot location longitude.
 *
 * @return {object}        To-do
 */
export function updateCurrentSpotLng(lng) {
  return {
    type: UPDATE_CURRENT_SPOT_LNG,
    lng,
  };
}

/**
 * Dispatched when the user edits the spot latitude and longitude simultaneously.
 * An example of this wold be a user clicking on a map.
 * As a response we would update both lat and lnd at the same time with just one action.
 *
 * @param {number} lat The spot location longitude.
 * @param {number} lng The spot location longitude.
 *
 * @return {object}        To-do
 */
export function updateCurrentSpotLocation(lat, lng) {
  return {
    type: UPDATE_CURRENT_SPOT_LOCATION,
    lat,
    lng,
  };
}

/**
 * Dispatched when the user renames a spot
 *
 * @param {string} name The spot name
 *
 * @return {object}        To-do
 */
export function updateCurrentSpotName(name) {
  return {
    type: UPDATE_CURRENT_SPOT_NAME,
    name,
  };
}

/**
 * Dispatched when the user removes and image from the spot image array
 *
 * @param {string} id The image unique identifier
 * @param {number} index The position of the image within the spot image array
 *
 * @return {object}        To-do
 */
export function updateCurrentSpotRemoveImage(id, index) {
  return {
    type: UPDATE_CURRENT_SPOT_REMOVE_IMAGE,
    id,
    index,
  };
}

/**
 * Dispatched when the user changes the spot type Enum
 *
 * @param {string} spotType The spot type Enum
 *
 * @return {object}        To-do
 */
export function updateCurrentSpotType(spotType) {
  return {
    type: UPDATE_CURRENT_SPOT_TYPE,
    spotType,
  };
}

