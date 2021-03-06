/**
 * Created by gaby on 7/4/17.
 * LoginPage selectors
 */

import { createSelector } from 'reselect';

const selectSearchQuery = (state) => state.get('profile');
const selectForm = (state) => state.get('form');


const makeSelectCurrentSection = () => createSelector(
  selectSearchQuery,
  (homePageState) => homePageState.get('currentSection')
);

const makeSelectCurrentObjectData = () => createSelector(
  selectSearchQuery,
  (homePageState) => homePageState.get('currentObjectData')
);

const makeSelectCurrentObjectSelected = () => createSelector(
  selectSearchQuery,
  (homePageState) => homePageState.get('currentObjectSelected')
);

const makeSelectCurrentPageIndex = () => createSelector(
  selectSearchQuery,
  (homePageState) => homePageState.get('currentPageIndex')
);

const makeSelectPaginationCount = () => createSelector(
  selectSearchQuery,
  (homePageState) => homePageState.get('paginationCount')
);

const makeSelectOngoingPackages = () => createSelector(
  selectSearchQuery,
  (homePageState) => homePageState.get('ongoingPackages')
);

const makeSelectUncompletedPackages = () => createSelector(
  selectSearchQuery,
  (homePageState) => homePageState.get('uncompletedPackages')
);

const makeSelectProfileForm = () => createSelector(
  selectForm,
  (formState) => formState.get('profile')
);

export {
  selectSearchQuery,
  makeSelectCurrentSection,
  makeSelectCurrentObjectData,
  makeSelectCurrentObjectSelected,
  makeSelectCurrentPageIndex,
  makeSelectPaginationCount,
  makeSelectOngoingPackages,
  makeSelectProfileForm,
  makeSelectUncompletedPackages,
};
