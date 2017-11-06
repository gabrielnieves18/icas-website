/**
 * Created by gaby on 7/4/17.
 */
import {
  CURRENT_SECTION,
  OBJECT_SELECTED,
  UPDATE_IMAGE,
} from './constants';

/**
 * Dispatched when the user updates the AppHeader SearchBar
 *
 * @param {array} payload The object containing the spot, spotter or user data
 *
 * @return {object}        An action object with a type of OBJECT_SELECTED and the request payload array of objects
 */
export function loadObjectData(payload) {
  return {
    type: OBJECT_SELECTED,
    payload,
  };
}

/**
 * Dispatched when the user updates the AppHeader SearchBar
 *
 * @param {number} section The object containing the spot, spotter or user data
 *
 * @return {object}        An action object with a type of OBJECT_SELECTED and the request payload array of objects
 */
export function updateCurrentSection(section) {
  return {
    type: CURRENT_SECTION,
    section,
  };
}

/**
 *
 * To-DO
 *
 */
export function updateImage(url, data) {
  return {
    type: UPDATE_IMAGE,
    url,
    data,
  };
}
