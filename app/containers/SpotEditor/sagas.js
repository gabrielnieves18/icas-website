/**
 * Created by gaby on 7/4/17.
 *
 * Logs In Spotin content steward
 *
 */
import axios from 'axios';

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  CREATE_NEW_SPOT,
  UPDATE_CURRENT_SPOT,
  UPDATE_CURRENT_SPOT_IN_SERVER,
} from './constants';

import {
  displayAlert,
  loadSpotData,
  errorWhileCreatingSpot,
  errorWhileUpdatingSpot,
} from './actions';

import { stopLoading } from '../App/actions';

import { makeSelectCurrentSpotId, makeSelectCurrentSpot } from './selectors';

import { API_GET_SPOTS_BASE, AUTH_TOKEN } from '../../constants-api';

import { checkStatus } from './../../utils/request';

/**
 * To-Do
 */
export function* createSpot() {
  const body = yield select(makeSelectCurrentSpot());

  try {
    /**
     * To-Do: Request Authorization Token for current user
     */
    const headers = {
      'Content-Type': 'application/json',
      Authorization: AUTH_TOKEN,
    };

    const config = {
      headers,
    };

    const response = yield call(
      axios.post,
      API_GET_SPOTS_BASE, // request URL
      body, // Spot object
      config // headers
    );

    const spot = checkStatus(response).data;

    yield put(loadSpotData(spot));
    yield put(stopLoading());
  } catch (err) {
    /**
     * To-Do: Propagate error through app state
     * To-Do: Use status code to notify user of error
     */

    // const statusCode = err.response.status;

    yield put(errorWhileCreatingSpot(true));
    yield put(stopLoading());
  }
  yield put(displayAlert(true));
}

/**
 * To-Do
 */
export function* loadData() {
  const spotId = yield select(makeSelectCurrentSpotId());
  const requestURL = `${API_GET_SPOTS_BASE}/${spotId}`;

  try {
    /**
     * To-Do: Request Authorization Token for current user
     */
    const headers = {
      'Content-Type': 'application/json',
      Authorization: AUTH_TOKEN,
    };

    const config = {
      headers,
    };

    const response = yield call(axios.get, requestURL, config);
    const spot = checkStatus(response).data;

    yield put(loadSpotData(spot));
    yield put(stopLoading());
  } catch (err) {
    /**
     * To-Do: Propagate error through app state
     */
    // logginError(err);
    // console.log('Error when getting payload', err);
    yield put(stopLoading());
  }
  yield put(displayAlert(true));
}

/**
 * To-Do
 */
export function* updateSpot() {
  const body = yield select(makeSelectCurrentSpot());
  const requestURL = `${API_GET_SPOTS_BASE}/${body._id}`; // eslint-disable-line

  console.log('_id', requestURL);

  try {
    /**
     * To-Do: Request Authorization Token for current user
     */
    const headers = {
      'Content-Type': 'application/json',
      Authorization: AUTH_TOKEN,
    };

    const config = {
      headers,
    };

    const response = yield call(
      axios.put,
      requestURL, // request URL
      body, // Spot object
      config // headers
    );

    const spot = checkStatus(response).data;

    yield put(loadSpotData(spot));
    yield put(stopLoading());
  } catch (err) {
    /**
     * To-Do: Propagate error through app state
     * To-Do: Use status code to notify user of error
     */

    // const statusCode = err.response.status;

    yield put(errorWhileUpdatingSpot(true));
    yield put(stopLoading());
  }
  yield put(displayAlert(true));
}

/**
 * Root saga manages watcher lifecycle
 */
export function* requestData() {
  // Watches for SEARCH_QUERY_UPDATED actions and calls loadData when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const createSpotWatcher = yield takeLatest(CREATE_NEW_SPOT, createSpot);
  const updateSpotWatcher = yield takeLatest(UPDATE_CURRENT_SPOT, loadData);
  const updateSpotInServerWatcher = yield takeLatest(UPDATE_CURRENT_SPOT_IN_SERVER, updateSpot);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(createSpotWatcher);
  yield cancel(updateSpotWatcher);
  yield cancel(updateSpotInServerWatcher);
}

// Bootstrap sagas
export default [
  requestData,
];
