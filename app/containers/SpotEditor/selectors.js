/**
 * Created by gaby on 7/4/17.
 * LoginPage selectors
 */

import { createSelector } from 'reselect';

const selectSpotEditorQuery = (state) => state.get('spotEditor');

const makeSelectDisplayAlert = () => createSelector(
  selectSpotEditorQuery,
  (spotEditorState) => spotEditorState.get('displayAlert')
);

const makeSelectCurrentSpot = () => createSelector(
  selectSpotEditorQuery,
  (spotEditorState) => spotEditorState.get('currentSpot')
);

const makeSelectCurrentSpotId = () => createSelector(
  selectSpotEditorQuery,
  (spotEditorState) => spotEditorState.get('currentSpotId')
);

const makeSelectCurrentSpotSelected = () => createSelector(
  selectSpotEditorQuery,
  (spotEditorState) => spotEditorState.get('currentSpotSelected')
);

const makeSelectErrorWhileCreatingSpot = () => createSelector(
  selectSpotEditorQuery,
  (spotEditorState) => spotEditorState.get('errorWhileCreatingSpot')
);

const makeSelectErrorWhileUpdatingSpot = () => createSelector(
  selectSpotEditorQuery,
  (spotEditorState) => spotEditorState.get('errorWhileUpdatingSpot')
);

export {
  selectSpotEditorQuery,
  makeSelectDisplayAlert,
  makeSelectCurrentSpot,
  makeSelectCurrentSpotId,
  makeSelectCurrentSpotSelected,
  makeSelectErrorWhileCreatingSpot,
  makeSelectErrorWhileUpdatingSpot,

};
