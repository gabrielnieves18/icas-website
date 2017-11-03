/**
 * Created by gaby on 8/16/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { propTypes } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form/immutable';

import FormField from '../Forms/LoginFormField';
import { validate, warn } from './RegisterFormValidation';

import ButtonSubmit from './ButtonSubmit';
import messages from './messages';

/* eslint-disable no-tabs */
// language=SCSS
const Wrapper = styled.div`
  @media all {
    display: flex;
    height: 100%;
    justify-content: center;
  }
`;

const RegisterForm = (props) => {
  const { handleSubmit } = props;
  return (
    <Wrapper>
      <form style={{ flexGrow: 1 }} onSubmit={handleSubmit}>
        <div style={{ flexGrow: 1 }}>
          <FormattedMessage {...messages.firstNameLabel} >
            {
              (formattedMessage) => (
                <Field name="firstName" component={FormField} type="text" label={formattedMessage} placeholder="John" />
              )
            }
          </FormattedMessage> <br />
          <FormattedMessage {...messages.lastNameLabel} >
            {
              (formattedMessage) => (
                <Field name="lastName" component={FormField} type="text" label={formattedMessage} placeholder="Doe" />
              )
            }
          </FormattedMessage> <br />
          <FormattedMessage {...messages.usernameLabel} >
            {
              (formattedMessage) => (
                <Field name="username_1" component={FormField} type="text" label={formattedMessage} placeholder="dragonslayer" />
              )
            }
          </FormattedMessage> <br />
          <FormattedMessage {...messages.retypeUsernameLabel} >
            {
              (formattedLabel) => (
                <FormattedMessage {...messages.oneMoreTimeLabel} >
                  {
                    (formattedPlaceholder) => (
                      <Field name="username_2" component={FormField} type="text" label={formattedLabel} placeholder={formattedPlaceholder} />
                    )
                  }
                </FormattedMessage>
              )
            }
          </FormattedMessage> <br />
          <FormattedMessage {...messages.passwordLabel} >
            {
              (formattedLabel) => (
                <FormattedMessage {...messages.makeItDifficultLabel} >
                  {
                    (formattedPlaceholder) => (
                      <Field name="password_1" component={FormField} type="password" label={formattedLabel} placeholder={formattedPlaceholder} />
                    )
                  }
                </FormattedMessage>
              )
            }
          </FormattedMessage> <br />
          <FormattedMessage {...messages.retypePasswordLabel} >
            {
              (formattedLabel) => (
                <FormattedMessage {...messages.oneMoreTimeLabel} >
                  {
                    (formattedPlaceholder) => (
                      <div style={{ marginTop: '26px' }}>
                        <Field name="password_2" component={FormField} type="password" label={formattedLabel} placeholder={formattedPlaceholder} />
                      </div>
                    )
                  }
                </FormattedMessage>
              )
            }
          </FormattedMessage> <br />
          <FormattedMessage {...messages.submitLabel} >
            {
              (formattedMessage) => (
                <ButtonSubmit style={{ margin: '36px 0px 0px 0px', width: '100%' }} >{formattedMessage}</ButtonSubmit>
              )
            }
          </FormattedMessage>
        </div>
      </form>
    </Wrapper>
  );
};

RegisterForm.propTypes = {
  ...propTypes,
  locale: PropTypes.string.isRequired,
};

const Form = reduxForm({
  form: 'register', // a unique name for the form
  validate, // <--- validation function given to redux-form
  warn, // <--- warning function given to redux-form
})(RegisterForm);

export default Form;
