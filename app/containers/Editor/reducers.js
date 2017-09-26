/**
 * Created by gaby on 6/25/17.
 */
import { fromJS } from 'immutable';

import {
  CURRENT_SECTION,
  DISPLAY_SAVE_MODAL,
  EDITOR_SECTIONS,
  EDITOR_SECTIONS_NAME,
  HIDE_SAVE_MODAL,
  RESET_SECTION_COMPLETED,
  SECTION_COMPLETED,
  SECTION_UNCOMPLETED,
} from './constants';

const initialState = fromJS({
  completedSections: fromJS({
    language: false,
    category: false,
    title: false,
    date: false,
    oneLiner: false,
    price: false,
    description: false,
    images: false,
    rendezvous: false,
    requirements: false,
    groupSize: false,
    packingList: false,
    reviewAndSubmit: false,
  }),
  currentSection: EDITOR_SECTIONS.language,
  displaySaveModal: false,
  previousSection: null,
});


function editorReducer(state = initialState, action) {

  let index = ['completedSections'];

  switch (action.type) {
    case CURRENT_SECTION:
      return state
        .set('previousSection', state.get('currentSection'))
        .set('currentSection', action.section);
    case DISPLAY_SAVE_MODAL:
      return state
        .set('displaySaveModal', true);
    case HIDE_SAVE_MODAL:
      return state
        .set('displaySaveModal', false);
    case SECTION_COMPLETED:
      switch (action.section) {
        case EDITOR_SECTIONS.language:
          index.push(EDITOR_SECTIONS_NAME.language);
          break;
        case EDITOR_SECTIONS.category:
          index.push(EDITOR_SECTIONS_NAME.category);
          break;
        case EDITOR_SECTIONS.title:
          index.push(EDITOR_SECTIONS_NAME.title);
          break;
        case EDITOR_SECTIONS.date:
          index.push(EDITOR_SECTIONS_NAME.date);
          break;
        case EDITOR_SECTIONS.oneLiner:
          index.push(EDITOR_SECTIONS_NAME.oneLiner);
          break;
        case EDITOR_SECTIONS.price:
          index.push(EDITOR_SECTIONS_NAME.price);
          break;
        case EDITOR_SECTIONS.description:
          index.push(EDITOR_SECTIONS_NAME.description);
          break;
        case EDITOR_SECTIONS.images:
          index.push(EDITOR_SECTIONS_NAME.images);
          break;
        case EDITOR_SECTIONS.rendezvous:
          index.push(EDITOR_SECTIONS_NAME.rendezvous);
          break;
        case EDITOR_SECTIONS.requirements:
          index.push(EDITOR_SECTIONS_NAME.requirements);
          break;
        case EDITOR_SECTIONS.groupSize:
          index.push(EDITOR_SECTIONS_NAME.groupSize);
          break;
        case EDITOR_SECTIONS.packingList:
          index.push(EDITOR_SECTIONS_NAME.packingList);
          break;
        case EDITOR_SECTIONS.reviewAndSubmit:
          index.push(EDITOR_SECTIONS_NAME.reviewAndSubmit);
          break;
        default: break;
      }
      return state.setIn(index, true);
    case SECTION_UNCOMPLETED:
      switch (action.section) {
        case EDITOR_SECTIONS.language:
          index.push(EDITOR_SECTIONS_NAME.language);
          break;
        case EDITOR_SECTIONS.category:
          index.push(EDITOR_SECTIONS_NAME.category);
          break;
        case EDITOR_SECTIONS.title:
          index.push(EDITOR_SECTIONS_NAME.title);
          break;
        case EDITOR_SECTIONS.date:
          index.push(EDITOR_SECTIONS_NAME.date);
          break;
        case EDITOR_SECTIONS.oneLiner:
          index.push(EDITOR_SECTIONS_NAME.oneLiner);
          break;
        case EDITOR_SECTIONS.price:
          index.push(EDITOR_SECTIONS_NAME.price);
          break;
        case EDITOR_SECTIONS.description:
          index.push(EDITOR_SECTIONS_NAME.description);
          break;
        case EDITOR_SECTIONS.images:
          index.push(EDITOR_SECTIONS_NAME.images);
          break;
        case EDITOR_SECTIONS.rendezvous:
          index.push(EDITOR_SECTIONS_NAME.rendezvous);
          break;
        case EDITOR_SECTIONS.requirements:
          index.push(EDITOR_SECTIONS_NAME.requirements);
          break;
        case EDITOR_SECTIONS.groupSize:
          index.push(EDITOR_SECTIONS_NAME.groupSize);
          break;
        case EDITOR_SECTIONS.packingList:
          index.push(EDITOR_SECTIONS_NAME.packingList);
          break;
        case EDITOR_SECTIONS.reviewAndSubmit:
          index.push(EDITOR_SECTIONS_NAME.reviewAndSubmit);
          break;
        default: break;
      }
      return state.setIn(index, false);
    case RESET_SECTION_COMPLETED:
      let rootIndex = 'completedSections';
      return state
        .setIn([rootIndex, EDITOR_SECTIONS_NAME.language], false)
        .setIn([rootIndex, EDITOR_SECTIONS_NAME.category], false)
        .setIn([rootIndex, EDITOR_SECTIONS_NAME.title], false)
        .setIn([rootIndex, EDITOR_SECTIONS_NAME.date], false)
        .setIn([rootIndex, EDITOR_SECTIONS_NAME.oneLiner], false)
        .setIn([rootIndex, EDITOR_SECTIONS_NAME.description], false)
        .setIn([rootIndex, EDITOR_SECTIONS_NAME.images], false)
        .setIn([rootIndex, EDITOR_SECTIONS_NAME.rendezvous], false)
        .setIn([rootIndex, EDITOR_SECTIONS_NAME.requirements], false)
        .setIn([rootIndex, EDITOR_SECTIONS_NAME.groupSize], false)
        .setIn([rootIndex, EDITOR_SECTIONS_NAME.packingList], false)
        .setIn([rootIndex, EDITOR_SECTIONS_NAME.reviewAndSubmit], false);
    default:
      return (state);
  }
}

export default editorReducer;
