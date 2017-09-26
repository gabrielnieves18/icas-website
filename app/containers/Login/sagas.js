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
import { makeSelectUser } from './../App/selectors';
import request from './../../utils/request';

import { API_GET_USER_LOGIN } from '../../constants-api';

/**
 * Spotin Login request/response handler
 */
export function* postUser() {
  // Select username from store
  const currentUser = yield select(makeSelectUser());
  // We use map.get() because the store map is an InmutableJS Object
  const email = currentUser.get('email');
  const password = currentUser.get('password');
  const requestURL = API_GET_USER_LOGIN(email, password);

  // To-Do:
  // remove next line of code when this
  // is properly connected to the server
  yield put(logginSuccess({}));

  try {
    // Call our request helper (see 'utils/request')
    // get the user whose credentials match
    const serverUser = yield call(request, requestURL);

    if (serverUser && serverUser.length > 0) {
      yield put(logginSuccess(serverUser[0]));
    } else {
      yield put(logginErrorEmail(false, 0));
    }
  } catch (err) {
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
  const currentUser = yield select(makeSelectUser());
  // We use map.get() because the store map is an InmutableJS Object
  const email = currentUser.get('email');
  const password = currentUser.get('password');
  const requestURL = API_GET_USER_LOGIN(email, password);

  try {
    // Call our request helper (see 'utils/request')
    // get the user whose credentials match
    const serverUser = yield call(request, requestURL);

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
  const loginUserWatcher = yield takeLatest(LOGIN_USER, postUser);
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
