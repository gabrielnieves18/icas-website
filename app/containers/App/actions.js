/**
 * Created by gaby on 7/29/17.
 */

import {
  IS_DESKTOP,
  IS_MOBILE,
  LOADING_START,
  LOADING_STOP,
  SCREEN_DIMEN_CHANGED,
  SET_USER_AVATAR,
} from './constants';

/**
 *
 * To-DO
 *
 */
export function isDesktop() {
  return {
    type: IS_DESKTOP,
  };
}


/**
 *
 * To-DO
 *
 */
export function isMobile() {
  return {
    type: IS_MOBILE,
  };
}

/**
 * Dispatched when the app is loading data for a new page.
 * An example of this is, when loading the information of a spot.
 *
 * While retrieving the necessary info this variable will be true.
 */
export function startLoading() {
  return {
    type: LOADING_START,
  };
}

/**
 * Dispatched when the app has retrieved the nesesary data for loading a new page.
 * Or when an error has occured and the apps is no longer performing an action.
 */
export function stopLoading() {
  return {
    type: LOADING_STOP,
  };
}

/**
 *
 * To-DO
 *
 */
export function updateAvatar(url, data) {
  return {
    type: SET_USER_AVATAR,
    url,
    data,
  };
}

/**
 *
 * To-DO
 *
 */
export function updateScreenDimensions(height, width) {
  return {
    type: SCREEN_DIMEN_CHANGED,
    height,
    width,
  };
}