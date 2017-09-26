/**
 * Created by gaby on 7/4/17.
 *
 * Logs In Spotin content steward
 *
 */
import axios from 'axios';

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { stopLoading } from '../App/actions';

import {
  sectionCompleted
} from './actions';

import {
  CURRENT_SECTION
} from './constants';

import {
  makeSelectPreviousSection,
} from './selectors';

/**
 * Spotin Login request/response handler
 */
export function* loadData() {
  // Select username from store
  // const currentPage = yield select(makeSelectCurrentPageIndex());

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

export function* validateSection() {
  // To-Do: Evaluate each row data to provide a validation checkmark
  // To the row that have no errors and remove the checkmark from
  // The ones that have errors. Only when the user Navigates using the
  // NavBar.
  //
  // This is more efficient than having to wait for the user to click
  // The "Next Page"/Submit button for validation.

  // Code snippet:
  //const currentRow = yield select(makeSelectPreviousSection());
  //yield put(sectionCompleted(currentRow));
}

/**
 * Root saga manages watcher lifecycle
 */
export function* requestData() {
  // Watches for CURRENT_SECTION actions and calls saveData when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const currentSection = yield takeLatest(CURRENT_SECTION, validateSection);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(currentSection);
}

// Bootstrap sagas
export default [
  requestData,
];
