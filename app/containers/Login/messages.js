/**
 * Created by gaby on 6/25/17.
 *
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  authPrompLabel1: {
    id: 'spotin.components.Login.auth.span.label1',
    defaultMessage: "Don't waste time with passwords.",
  },
  authPrompLabel2: {
    id: 'spotin.components.Login.auth.span.label2',
    defaultMessage: 'Login with your facebook or google account.',
  },
  firstNameLabel: {
    id: 'spotin.components.Login.firstName.label',
    defaultMessage: 'First Name',
  },
  lastNameLabel: {
    id: 'spotin.components.Login.lastName.label',
    defaultMessage: 'Last Name',
  },
  loginLabel: {
    id: 'spotin.components.Login.login.label',
    defaultMessage: 'Login',
  },
  makeItDifficultLabel: {
    id: 'spotin.components.Login.makeItDifficult.label',
    defaultMessage: 'Make it difficult to guess',
  },
  oneMoreTimeLabel: {
    id: 'spotin.components.Login.oneMoreTime.label',
    defaultMessage: 'One more time',
  },
  registerLabel: {
    id: 'spotin.components.Login.register.label',
    defaultMessage: 'Register',
  },
  retypeEmailLabel: {
    id: 'spotin.components.Login.retype.email.label',
    defaultMessage: 'Retype email',
  },
  retypePasswordLabel: {
    id: 'spotin.components.Login.retype.password.label',
    defaultMessage: 'Retype password',
  },
  submitLabel: {
    id: 'spotin.components.Login.submit.label',
    defaultMessage: 'Submit',
  },
  emailLabel: {
    id: 'spotin.components.Login.email.label',
    defaultMessage: "Email",
  },
  passwordLabel: {
    id: 'spotin.components.Login.password.label',
    defaultMessage: 'Password',
  },
  validationRequiredLabel: {
    id: 'spotin.components.Login.validation.required.label',
    defaultMessage: 'Required',
  },
  validationInvalidEmailLabel: {
    id: 'spotin.components.Login.validation.invalidEmail.label',
    defaultMessage: 'Invalid email address',
  },
  validationEmailMismatchLabel: {
    id: 'spotin.components.Login.validation.mismatchEmail.label',
    defaultMessage: 'Email does not match',
  },
  validationPasswordMismatchLabel: {
    id: 'spotin.components.Login.validation.mismatchPassword.label',
    defaultMessage: 'Password does not match',
  },
});
