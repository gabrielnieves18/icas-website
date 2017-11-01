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
  logginSuccess,
  logginErrorEmail,
  registerSuccess,
  registerErrorFirstName,
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

  console.log(loginForm);
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
      Origin: 'http://localhost:3000',
      Host: 'creativecaco.com',
    },
  };

  console.log('username', username, 'password', password);
  console.log('url', requestURL, 'head', options);

  try {
    // Call our request helper (see 'utils/request')
    // get the user whose credentials match
    const serverUser = yield call(request, API_GET_USERS_BASE, options);

    console.log('serverUser:', serverUser);

    // Send the compressed image file to server with XMLHttpRequest.
    // axios.post('/path/to/upload', formData).then(() => {
    //   console.log('Upload success!');
    // });

    if (serverUser && serverUser.length > 0) {
      yield put(logginSuccess(serverUser[0]));
    } else {
      yield put(logginErrorEmail(false, 0));
    }
  } catch (err) {
    console.log('SERVERERROR:', err);
    // yield put(logginErrorEmail(err.error, err.code));
  }
}

/**
 * Spotin Register request/response handler
 *
 * To-Do
 *
 */
export function* registerUser() {
  // Select username from store

  const loginForm = yield select(makeSelectLoginForm());
  // We use map.get() because the store map is an InmutableJS Object
  const firstName = loginForm.get('first_name');
  const lastName = loginForm.get('first_name');
  const username = loginForm.get('username');
  const password = loginForm.get('password');
  const requestURL = API_GET_USERS_BASE;

  const basicAuth = `${username}:${password}`;

  const options = {
    method: 'GET',
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

  try {
    // Call our request helper (see 'utils/request')
    // get the user whose credentials match
    const serverUser = yield call(request, requestURL, options);

    console.log(serverUser);

    if (serverUser && serverUser.length > 0) {
      yield put(registerSuccess(serverUser[0]));
    } else {
      yield put(registerErrorFirstName(false, 0));
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
