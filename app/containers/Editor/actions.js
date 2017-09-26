/**
 * Created by gaby on 7/4/17.
 */
import {
  CURRENT_SECTION,
  DISPLAY_SAVE_MODAL,
  HIDE_SAVE_MODAL,
  OBJECT_SELECTED,
  SECTION_COMPLETED,
  SECTION_UNCOMPLETED,
} from './constants';

/**
 * To-Do
 *
 * @return {object}
 */
export function displaySaveModal() {
  return {
    type: DISPLAY_SAVE_MODAL,
  };
}

/**
 * To-Do
 *
 * @return {object}
 */
export function hideSaveModal() {
  return {
    type: HIDE_SAVE_MODAL,
  };
}

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
 * To-Do
 *
 * @param {number} section The section Enum
 *
 * @return {object}
 */
export function sectionCompleted(section) {
  return {
    type: SECTION_COMPLETED,
    section,
  };
}

/**
 * To-Do
 *
 * @param {number} section The section Enum
 *
 * @return {object}
 */
export function sectionUncompleted(section) {
  return {
    type: SECTION_UNCOMPLETED,
    section,
  };
}

/**
 * To-Do
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
