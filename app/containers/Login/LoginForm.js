/**
 * Created by gaby on 8/16/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { propTypes } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form/immutable';

import ButtonSubmit from './ButtonSubmit';
import FormField from '../Forms/LoginFormField';
import messages from './messages';

import { validate, warn } from './LoginFormValidation';


/* eslint-disable no-tabs */
// language=SCSS
const Wrapper = styled.div`
  @media all {
    display: flex;
    height: 100%;
    justify-content: center;
  }
`;

const LoginForm = (props) => {
  const { handleSubmit, locale, pristine, valid } = props;
  return (
    <Wrapper>
      <form style={{ flexGrow: 1 }} onSubmit={handleSubmit}>
        <div style={{ flexGrow: 1 }}>
          <FormattedMessage {...messages.usernameLabel} >
            {
              (formattedMessage) => (
                <Field name="username" component={FormField} type="text" label={formattedMessage} placeholder="dragonslayer" />
              )
            }
          </FormattedMessage>
          <br />
          <FormattedMessage {...messages.passwordLabel} >
            {
              (formattedMessage) => (
                <Field name="password" component={FormField} type="password" label={formattedMessage} />
              )
            }
          </FormattedMessage>
          <br />
          <ButtonSubmit style={{ margin: '26px 0px 0px 0px', width: '100%' }} >
            <FormattedMessage {...messages.submitLabel} />
          </ButtonSubmit>
        </div>
      </form>
    </Wrapper>
  );
};

LoginForm.propTypes = {
  ...propTypes,
  locale: PropTypes.string.isRequired,
};

const Form = reduxForm({
  form: 'login', // a unique name for the form
  validate, // <--- validation function given to redux-form
  warn, // <--- warning function given to redux-form
})(LoginForm);

export default Form;
