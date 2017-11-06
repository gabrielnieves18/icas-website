/**
 * Created by gaby on 6/25/17.
 *
 * Logs In Spotin content steward
 *
 */
import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { initialize } from 'redux-form';

import { LOGIN_USER, REGISTER_USER } from './constants';
import {
  loginSuccess,
  registerSuccess,
} from './actions';

import {
  makeSelectRegisterForm,
  makeSelectLoginForm,
} from './selectors';

import { makeSelectUser } from '../App/selectors';


import { makeSelectProfileForm } from '../Profile/selectors';

import { UPDATE_PROFILE } from '../Profile/constants';

import request from './../../utils/request';

import { API_GET_USERS_BASE } from '../../constants-api';

const initProfileForm = (user) => initialize(
  'profile',
  {
    firstName: user.first_name,
    lastName: user.last_name,
    username: user.username,
  },
  ['firstName', 'lastName', 'username']
);

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
      // import { initialize } from 'redux-form'
      yield put(initProfileForm(user[0]));
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
  const requestURL = `${API_GET_USERS_BASE}/`;


  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      username,
      password,
    }),
  };

  try {
    // Call our request helper (see 'utils/request')
    // get the user whose credentials match
    const serverPayload = yield call(request, requestURL, options);
    const user = {
      id: serverPayload['id'],
      first_name: serverPayload['first_name'],
      last_name: serverPayload['last_name'],
      username: serverPayload['username'],
      url: serverPayload['url'],
    };

    if (user.id) {
      yield put(initProfileForm(user));
      yield put(loginSuccess(user));
    } else {
      window.alert('An error occurred: An error has occurred. Could not find User, sorry! :\'(');
    }
  } catch (err) {
    window.alert(`An error occurred: ${err}`);
    // yield put(registerErrorFirstName(err.error, err.code));
  }
}

/**
 *
 * To-Do
 *
 */
export function* updateUser() {
  const registerForm = yield select(makeSelectProfileForm());
  const currentUser = yield select(makeSelectUser());
  const profileValues = registerForm.get('values');
  const profileValidations = registerForm.get('syncErrors');

  console.log('user', currentUser);
  console.log('profileValues', profileValues);

  const firstNameValidation = profileValidations ? !profileValidations.get('firstName') : false;
  const lastNameValidation = profileValidations ? !profileValidations.get('lastName') : false;
  const usernameValidation = profileValidations ? !profileValidations.get('username') : false;
  const passwordValidation = profileValidations ? (
    !profileValidations.get('password_1') && !profileValidations.get('password_2')
  ) : false;

  // We use map.get() because the store map is an InmutableJS Object
  const requestURL = currentUser.get('url');

  let body = {};

  if (firstNameValidation) {
    body = {
      ...body,
      first_name: profileValues.get('firstName'),
    };
  }

  if (lastNameValidation) {
    body = {
      ...body,
      last_name: profileValues.get('lastName'),
    };
  }

  if (usernameValidation) {
    body = {
      ...body,
      username: profileValues.get('username'),
    };
  }

  if (passwordValidation) {
    body = {
      ...body,
      password: profileValues.get('password_1'),
    };
  }

  const basicAuth = `${profileValues.get('username')}:${profileValues.get('password_1')}`;

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Basic ${btoa(basicAuth)}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  try {
    // Call our request helper (see 'utils/request')
    // get the user whose credentials match
    const serverPayload = yield call(request, requestURL, options);
    const user = {
      id: serverPayload['id'],
      first_name: serverPayload['first_name'],
      last_name: serverPayload['last_name'],
      username: serverPayload['username'],
      url: serverPayload['url'],
    };

    if (user.id) {
      yield put(initProfileForm(user));
      yield put(loginSuccess(user));
    } else {
      window.alert('An error occurred: An error has occurred. Could not find User, sorry! :\'(');
    }
  } catch (err) {
    window.alert(`An error occurred: ${err}`);
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
  const registerUpdateProfileWatcher = yield takeLatest(UPDATE_PROFILE, updateUser);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(loginUserWatcher);
  yield cancel(registerUserWatcher);
  // yield cancel(registerUpdateProfileWatcher);
}

// Bootstrap sagas
export default [
  loginData,
];
