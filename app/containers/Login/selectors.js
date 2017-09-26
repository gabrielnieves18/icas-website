/**
 * Created by gaby on 6/25/17.
 * LoginPage selectors
 */

import { createSelector } from 'reselect';

const selectLoginPage = (state) => state.get('login');

const makeSelectAttempts = () => createSelector(
  selectLoginPage,
  (globalState) => globalState.get('attempts')
);

const makeSelectLoginError = () => createSelector(
  selectLoginPage,
  (globalState) => globalState.get('loginError')
);

const makeSelectRegisterError = () => createSelector(
  selectLoginPage,
  (globalState) => globalState.get('registerError')
);

const makeSelectRegister = () => createSelector(
  selectLoginPage,
  (globalState) => globalState.get('register')
);

const makeSelectUserLogged = () => createSelector(
  selectLoginPage,
  (globalState) => globalState.get('userLogged')
);

export {
  selectLoginPage,
  makeSelectAttempts,
  makeSelectLoginError,
  makeSelectRegisterError,
  makeSelectRegister,
  makeSelectUserLogged,
};
