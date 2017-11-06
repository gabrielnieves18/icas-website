/**
 * Created by gaby on 7/4/17.
 */
import {
  CURRENT_SECTION,
  OBJECT_SELECTED,
  PREVIOUS_PAGE,
  NEXT_PAGE,
  UPDATE_PROFILE,
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
 * Dispatched when the user the "Previous" button at the bottom of the HomePage Component
 *
 * @return {object}        An action object with a type of PREVIOUS_PAGE
 */
export function loadPreviousPage() {
  return {
    type: PREVIOUS_PAGE,
  };
}

export function loadNextPage() {
  /**
   * Dispatched when the user the "Next" button at the bottom of the HomePage Component
   *
   * @return {object}        An action object with a type of NEXT_PAGE
   */
  return {
    type: NEXT_PAGE,
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
 */
export function updateProfile() {
  return {
    type: UPDATE_PROFILE,
  };
}
