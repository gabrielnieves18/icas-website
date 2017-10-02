/*
 * Created by gaby on 6/25/17.
 *
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  CLOSE_CHAT,
  IS_DESKTOP,
  IS_MOBILE,
  EMAIL_CHANGED,
  LOADING_START,
  LOADING_STOP,
  OPEN_CHAT,
  PASSWORD_CHANGED,
  SCREEN_DIMEN_CHANGED,
  SET_USER_AVATAR,
  USER_TYPES,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  currentUser: false,
  error: false,
  isDesktop: true,
  isMobile: false,
  loading: false,
  openChat: false,
  screenDimensions: fromJS({
    height: 0,
    width: 0,
  }),
  user: fromJS({
    _id: -1,
    avatar: fromJS({
      url: "",
      data: {},
    }),
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    type: USER_TYPES.DEFAULT,
  }),
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CLOSE_CHAT:
      return state
        .set('openChat', false);
    case IS_MOBILE:
      return state
        .set('isDesktop', false)
        .set('isMobile', true);
    case IS_DESKTOP:
      return state
        .set('isDesktop', true)
        .set('isMobile', false);
    case EMAIL_CHANGED:
      return state
        .setIn(['user', 'email'], action.email);
    case PASSWORD_CHANGED:
      return state
        .setIn(['user', 'password'], action.password);
    case LOADING_START:
      return state
        .set('loading', true);
    case LOADING_STOP:
      return state
        .set('loading', false);
    case OPEN_CHAT:
      return state
        .set('openChat', true);
    case SCREEN_DIMEN_CHANGED:
      return state
        .setIn(['screenDimensions', 'height'], action.height)
        .setIn(['screenDimensions', 'width'], action.width);
    case SET_USER_AVATAR:
      return state
        .setIn(['user', 'avatar', 'url'], action.url)
        .setIn(['user', 'avatar', 'data'], {
          lastModified: action.data.lastModified,
          modified: action.data.lastModifiedDate,
          name: action.data.name,
          size: action.data.size,
          type: action.data.type
        });
    default:
      return state;
  }
}

export default appReducer;