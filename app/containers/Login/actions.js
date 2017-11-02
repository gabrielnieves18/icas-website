/**
 * Created by gaby on 6/25/17.
 */
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
  LOGIN_USER,
  REGISTER_USER,
  REGISTER,
  SUCCESS_LOGIN,
  SUCCESS_REGISTER,
} from './constants';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
} from '../App/constants';

/**
 * Dispatched when the user attempts to login
 *
 * @param  {number} count The number of times that the user has attempted to login.
 *
 * @return {object}             An action object with a type of ATTEMPT_LOGIN passing the attempt counter
 */
export function storeLoginAttempt(count) {
  return {
    type: ATTEMPT_LOGIN,
    count,
  };
}

/**
 * Dispatched when logging the provides an invalid login email
 *
 * @param  {bool}   error Pass true if an error occurred, false otherwise.
 * @param  {number} code  The code for this error
 *
 * @return {object}
 */
export function loginErrorEmail(error, code) {
  return {
    type: ERROR_LOGIN_EMAIL,
    error,
    code,
  };
}

/**
 * Dispatched when logging the provides an invalid login password
 *
 * @param  {bool}   error Pass true if an error occurred, false otherwise.
 * @param  {number} code  The code for this error
 *
 * @return {object}
 */
export function loginErrorPassword(error, code) {
  return {
    type: ERROR_LOGIN_PASSWORD,
    error,
    code,
  };
}

/**
 * Dispatched when logging the provides an invalid register First Name
 *
 * @param  {bool}   error Pass true if an error occurred, false otherwise.
 * @param  {number} code  The code for this error
 *
 * @return {object}
 */
export function registerErrorFirstName(error, code) {
  return {
    type: ERROR_REGISTER_FIRSTNAME,
    error,
    code,
  };
}

/**
 * Dispatched when logging the provides an invalid register Last Name
 *
 * @param  {bool}   error Pass true if an error occurred, false otherwise.
 * @param  {number} code  The code for this error
 *
 * @return {object}
 */
export function registerErrorLastName(error, code) {
  return {
    type: ERROR_REGISTER_LASTNAME,
    error,
    code,
  };
}

/**
 * Dispatched when logging the provides an invalid register email1
 *
 * @param  {bool}   error Pass true if an error occurred, false otherwise.
 * @param  {number} code  The code for this error
 *
 * @return {object}
 */
export function registerErrorEmail1(error, code) {
  return {
    type: ERROR_REGISTER_EMAIL1,
    error,
    code,
  };
}

/**
 * Dispatched when logging the provides an invalid register email2 (The "Re-typed" email)
 *
 * @param  {bool}   error Pass true if an error occurred, false otherwise.
 * @param  {number} code  The code for this error
 *
 * @return {object}
 */
export function registerErrorEmail2(error, code) {
  return {
    type: ERROR_REGISTER_EMAIL2,
    error,
    code,
  };
}

/**
 * Dispatched when logging the provides an invalid register Password1
 *
 * @param  {bool}   error Pass true if an error occurred, false otherwise.
 * @param  {number} code  The code for this error
 *
 * @return {object}
 */
export function registerErrorPassword1(error, code) {
  return {
    type: ERROR_REGISTER_PASSWORD1,
    error,
    code,
  };
}

/**
 * Dispatched when logging the provides an invalid register Password2 (The "Re-typed" password)
 *
 * @param  {bool}   error Pass true if an error occurred, false otherwise.
 * @param  {number} code  The code for this error
 *
 * @return {object}
 */
export function registerErrorPassword2(error, code) {
  return {
    type: ERROR_REGISTER_PASSWORD2,
    error,
    code,
  };
}

/**
 * Dispatched when the user has successfully logged.
 *
 * @param  {object} user A boolean indicative of the user login state.
 *                             True if login successfully, false otherwise.
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function loginSuccess(user) {
  return {
    type: SUCCESS_LOGIN,
    user,
  };
}

export function loginUser() {
  return {
    type: LOGIN_USER,
  };
}

/**
 * Dispatched when the user has successfully registered.
 *
 * @param  {object} user A boolean indicative of the user login state.
 *                             True if login successfully, false otherwise.
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function registerSuccess(user) {
  return {
    type: SUCCESS_REGISTER,
    user,
  };
}

export function registerUser() {
  return {
    type: REGISTER_USER,
  };
}

/**
 * Dispatched when the user touches the "Register" tab.
 *
 * @param  {bool} flag  A boolean that when true will make the login page render the component for
 *                      registering a user.
 *
 * @return {object}     An action object with a type of REGISTER passing flag that would enable
 *                      the register menu to appear
 */
export function registerAction(flag) {
  return {
    type: REGISTER,
    register: flag,
  };
}

/**
 * Dispatched when the user edits the email field value
 *
 * @param  {string} email The user email
 *
 * @return {object}       An action object with a type of EMAIL_CHANGED passing the email
 */
export function updateEmail(email) {
  return {
    type: EMAIL_CHANGED,
    email,
  };
}

/**
 * Dispatched when the user edits the password field value
 *
 * @param  {string} password The account password
 *
 * @return {object}       An action object with a type of PASSWORD_CHANGED passing the password
 */
export function updatePassword(password) {
  return {
    type: PASSWORD_CHANGED,
    password,
  };
}
