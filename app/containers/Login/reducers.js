/**
 * Created by gaby on 6/25/17.
 */
import { fromJS } from 'immutable';

import {
  ATTEMPT_LOGIN,
  ERROR_LOGIN_EMAIL,
  ERROR_LOGIN_PASSWORD,
  ERROR_REGISTER_FIRSTNAME,
  ERROR_REGISTER_LASTNAME,
  ERROR_REGISTER_EMAIL1,
  ERROR_REGISTER_EMAIL2,
  ERROR_REGISTER_PASSWORD1,
  ERROR_REGISTER_PASSWORD2,
  REGISTER,
  SUCCESS_REGISTER,
  SUCCESS_LOGIN,
} from './constants';

const initialState = fromJS({
  attempts: 1,
  loginError: fromJS({
    email: fromJS({
      error: false,
      code: 0,
    }),
    password: fromJS({
      error: false,
      code: 0,
    }),
  }),
  registerError: fromJS({
    firstName: fromJS({
      error: false,
      code: 0,
    }),
    lastName: fromJS({
      error: false,
      code: 0,
    }),
    email1: fromJS({
      error: false,
      code: 0,
    }),
    email2: fromJS({
      error: false,
      code: 0,
    }),
    password1: fromJS({
      error: false,
      code: 0,
    }),
    password2: fromJS({
      error: false,
      code: 0,
    }),
  }),
  register: false,
  userLogged: false,
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    // Add up the number of times the user
    // has attempted to login.
    case ATTEMPT_LOGIN:
      return state
        .set('attempts', action.count);
    // There was an error with login email
    case ERROR_LOGIN_EMAIL:
      return state
        .setIn(['loginError', 'email', 'error'], action.error)
        .setIn(['loginError', 'email', 'code'], action.code);
    // There was an error with login password
    case ERROR_LOGIN_PASSWORD:
      return state
        .setIn(['loginError', 'password', 'error'], action.error)
        .setIn(['loginError', 'password', 'code'], action.code);
    // There was an error with register firstName
    case ERROR_REGISTER_FIRSTNAME:
      return state
        .setIn(['registerError', 'firstName', 'error'], action.error)
        .setIn(['registerError', 'firstName', 'code'], action.code);
    // There was an error with register lastName
    case ERROR_REGISTER_LASTNAME:
      return state
        .setIn(['registerError', 'lastName', 'error'], action.error)
        .setIn(['registerError', 'lastName', 'code'], action.code);
    // There was an error with register email1
    case ERROR_REGISTER_EMAIL1:
      return state
        .setIn(['registerError', 'email1', 'error'], action.error)
        .setIn(['registerError', 'email2', 'code'], action.code);
    // There was an error with register email2
    case ERROR_REGISTER_EMAIL2:
      return state
        .setIn(['registerError', 'email2', 'error'], action.error)
        .setIn(['registerError', 'email2', 'code'], action.code);
    // There was an error with register password1
    case ERROR_REGISTER_PASSWORD1:
      return state
        .setIn(['registerError', 'password1', 'error'], action.error)
        .setIn(['registerError', 'password1', 'code'], action.code);
    // There was an error with register password2
    case ERROR_REGISTER_PASSWORD2:
      return state
        .setIn(['registerError', 'password2', 'error'], action.error)
        .setIn(['registerError', 'password2', 'code'], action.code);
    // User successfully logged in
    case REGISTER:
      return state
        .set('register', action.register);
    // User successfully logged in
    case SUCCESS_LOGIN:
      return state
        .set('userLogged', true);
    default:
      return state;
  }
}

export default loginPageReducer;
