/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';

export const CLOSE_CHAT = 'spotin/App/CLOSE_CHAT';
export const EMAIL_CHANGED = 'app/App/EMAIL_CHANGED';
export const LOADING_START = 'app/App/LOADING_START';
export const LOADING_STOP = 'app/App/LOADING_STOP';
export const IS_DESKTOP = 'app/App/IS_DESKTOP';
export const IS_MOBILE = 'app/App/IS_MOBILE';
export const OPEN_CHAT = 'spotin/App/OPEN_CHAT';
export const PASSWORD_CHANGED = 'app/App/PASSWORD_CHANGED';
export const SCREEN_DIMEN_CHANGED = 'app/App/SCREEN_DIMEN_CHANGED';
export const SET_USER_AVATAR = 'app/App/SET_USER_AVATAR';

export const USER_TYPES = {
  ADMIN: 'Administrator', // Has full access to the Database
  STEWARD: 'Steward', // Has read and write access to the Database
  DEFAULT: 'Default', // Has only read access to the Database
};
