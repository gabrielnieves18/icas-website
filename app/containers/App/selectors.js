// makeSelectLocationState expects a plain JS object for the routing state
/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectAvatar = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('user').get('avatar')
);

const makeSelectIsDesktop = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('isDesktop')
);

const makeSelectIsMobile = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('isMobile')
);

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentUser')
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const makeSelectOpenChat = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('openChat')
);

const makeSelectScreenDimentions = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('screenDimensions')
);

const makeSelectUser = () => createSelector(
  selectGlobal,
  (loginPageState) => loginPageState.get('user')
);

export {
  selectGlobal,
  makeSelectAvatar,
  makeSelectIsDesktop,
  makeSelectIsMobile,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectOpenChat,
  makeSelectError,
  makeSelectLocationState,
  makeSelectScreenDimentions,
  makeSelectUser,
};
