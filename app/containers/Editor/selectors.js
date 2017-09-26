/**
 * Created by gaby on 7/4/17.
 * LoginPage selectors
 */

import { createSelector } from 'reselect';
import { EDITOR_SECTIONS_NAME } from './constants';

const selectEditor = (state) => state.get('pkgEditor');


const makeSelectCurrentSection = () => createSelector(
  selectEditor,
  (editorState) => editorState.get('currentSection')
);

const makeSelectCompletedSections = () => createSelector(
  selectEditor,
  (editorState) => editorState.get('completedSections')
);

const makeSelectDisplaySaveModal = () => createSelector(
  selectEditor,
  (editorState) => editorState.get('displaySaveModal')
);

const makeSelectPreviousSection = () => createSelector(
  selectEditor,
  (editorState) => editorState.get('previousSection')
);

// Calculate if the pkg is completed and ready for submission.
// We will only submit the pkg, when all sections are completed
const makeSelectSubmitNewPKG = () => createSelector(
  selectEditor,
  (editorState) => {
    const completedSections = editorState.get('completedSections');
    return (
      completedSections.get(EDITOR_SECTIONS_NAME.language) &&
      completedSections.get(EDITOR_SECTIONS_NAME.category) &&
      completedSections.get(EDITOR_SECTIONS_NAME.title) &&
      completedSections.get(EDITOR_SECTIONS_NAME.date) &&
      completedSections.get(EDITOR_SECTIONS_NAME.oneLiner) &&
      completedSections.get(EDITOR_SECTIONS_NAME.description) &&
      completedSections.get(EDITOR_SECTIONS_NAME.images) &&
      completedSections.get(EDITOR_SECTIONS_NAME.rendezvous) &&
      completedSections.get(EDITOR_SECTIONS_NAME.requirements) &&
      completedSections.get(EDITOR_SECTIONS_NAME.groupSize) &&
      completedSections.get(EDITOR_SECTIONS_NAME.packingList)
    );
  }
);



export {
  selectEditor,
  makeSelectCurrentSection,
  makeSelectCompletedSections,
  makeSelectDisplaySaveModal,
  makeSelectPreviousSection,
  makeSelectSubmitNewPKG,
};
