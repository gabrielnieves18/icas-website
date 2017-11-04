/**
 * Created by gaby on 7/4/17.
 *
 * Logs In Spotin content steward
 *
 */
import axios from 'axios';

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { loadObjectData } from './actions';

import { stopLoading } from '../App/actions';

import { makeSelectCurrentPageIndex } from './selectors';

import {
  API_GET_SPOTERS_BASE,
  API_GET_USERS_BASE,
  API_SEARCH_SPOTS_PAGINATE,
  SEARCH_TYPES,
} from '../../constants-api';

import { checkStatus } from './../../utils/request';

/**
 * Spotin Login request/response handler
 */
export function* loadData() {
  // Select username from store
  const currentPage = yield select(makeSelectCurrentPageIndex());

  // Load Spots By default
  // Return all Spots if the * character is used.
  let requestURL = '';

  try {
    // const response = yield call(axios.get, requestURL, config);
    // yield put(loadObjectData(checkStatus(response).data));

    // Stop Global App Loading Value
    yield put(stopLoading());
  } catch (err) {
    /**
     * To-Do: Propagate error through app state
     */
    // Stop Global App Loading Value
    yield put(stopLoading());
    // logginError(err);
    // console.log('Error when getting payload', err);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* requestData() {
  // Watches for SEARCH_QUERY_UPDATED actions and calls loadData when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  //const perPageQuantityWatcher = yield takeLatest(DISPLAY_QUANTITY_UPDATED, loadData);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  //yield cancel(perPageQuantityWatcher);
}

// Bootstrap sagas
export default [
  requestData,
];
