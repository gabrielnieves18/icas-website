/**
 * Created by gaby on 7/4/17.
 * LoginPage selectors
 */

import { createSelector } from 'reselect';

const selectSearchQuery = (state) => state.get('home');


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


const makeSelectCurrentImage = () => createSelector(
  selectSearchQuery,
  (homePageState) => homePageState.get('currentImage')
);


export {
  selectSearchQuery,
  makeSelectCurrentSection,
  makeSelectCurrentImage,
  makeSelectCurrentObjectData,
  makeSelectCurrentObjectSelected,
  makeSelectCurrentPageIndex,
  makeSelectPaginationCount,
};
