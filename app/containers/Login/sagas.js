/**
 * Created by gaby on 6/25/17.
 *
 * Logs In Spotin content steward
 *
 */
import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOGIN_USER, REGISTER_USER } from './constants';
import {
  loginSuccess,
} from './actions';

import {
  makeSelectRegisterForm,
  makeSelectLoginForm,
} from './selectors';

import request from './../../utils/request';

import { API_GET_USERS_BASE } from '../../constants-api';

/**
 * Spotin Login request/response handler
 */
export function* getUser() {
  // Select username from store

  const loginForm = yield select(makeSelectLoginForm());
  const loginValues = loginForm.get('values');

  // We use map.get() because the store map is an InmutableJS Object
  const username = loginValues.get('username');
  const password = loginValues.get('password');
  const requestURL = API_GET_USERS_BASE;

  const basicAuth = `${username}:${password}`;

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Basic ${btoa(basicAuth)}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    // Call our request helper (see 'utils/request')
    // get the user whose credentials match
    const serverPayload = yield call(request, requestURL, options);
    const user = serverPayload.results;

    if (user && username.length > 0) {
      yield put(loginSuccess(user[0]));
    } else {
      window.alert('An error occurred: An error has occurred. Could not find User, sorry! :\'(');
    }
  } catch (err) {
    window.alert(`An error occurred: ${err}`);
    // yield put(loginErrorEmail(err.error, err.code));
  }
}

/**
 * Spotin Register request/response handler
 *
 * To-Do
 *
 */
export function* registerUser() {
  const registerForm = yield select(makeSelectRegisterForm());
  const registerValues = registerForm.get('values');

  console.log('registerValues', registerValues);

  // We use map.get() because the store map is an InmutableJS Object
  const firstName = registerValues.get('firstName');
  const lastName = registerValues.get('lastName');
  const username = registerValues.get('username_1');
  const password = registerValues.get('password_1');
  const requestURL = API_GET_USERS_BASE;

  const basicAuth = `${username}:${password}`;

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Basic ${btoa(basicAuth)}`,
      'Content-Type': 'application/json',
    },
    body: {
      first_name: firstName,
      last_name: lastName,
      username,
      password,
    },
  };

  console.log(options);

  try {
    // Call our request helper (see 'utils/request')
    // get the user whose credentials match
    const serverPayload = yield call(request, requestURL, options);
    const user = serverPayload.results;

    console.log(user);

    if (user && user.length > 0) {
      console.log(user);
      yield put(loginSuccess(user[0]));
    } else {
      window.alert('An error occurred: An error has occurred. Could not find User, sorry! :\'(');
    }
  } catch (err) {
    // yield put(registerErrorFirstName(err.error, err.code));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* loginData() {
  // Watches for LOGIN_USER and REGISTER_USER actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const loginUserWatcher = yield takeLatest(LOGIN_USER, getUser);
  const registerUserWatcher = yield takeLatest(REGISTER_USER, registerUser);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(loginUserWatcher);
  yield cancel(registerUserWatcher);
}

// Bootstrap sagas
export default [
  loginData,
];
