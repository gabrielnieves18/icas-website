/*
 * Created by gaby on 8/16/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { propTypes } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form/immutable';

import ButtonSubmit from '../Profile/ButtonSubmit';
import FormField from './AboutMeFormField';
import messages from './messages';
import Wrapper from './Wrapper';

import { validate, warn } from './AboutMeFormValidation';

const LoginForm = (props) => {
  const {
    handleSubmit,
    locale,
    pristine,
    submitButtonTitle = "Next Page",
    user = null,
    valid,
  } = props;

  const styles = {
    header: {
      padding: '0',
      margin: '0',
      textAlign: 'justify',
      fontFamily: 'Helvetica Neue',
    },
  };

  let firstName = user && user.firstName ? user.firstName : null;
  let lastName = user && user.lastName ? user.lastName : null;
  let username = user && user.username ? user.username : null;

  return (
    <Wrapper>
      <form style={{ flexGrow: 1 }} onSubmit={handleSubmit}>
        <div style={{ flexGrow: 1 }}>
          <FormattedMessage {...messages.fullNameLabel} >
            { (formattedMSG) => <h2 style={styles.header}>{formattedMSG}</h2> }
          </FormattedMessage>
          <FormattedMessage {...messages.firstNameLabel} >
            {
              (formattedMessage) => (
                <Field
                  name="firstName"
                  component={FormField} type="text"
                  label={formattedMessage} placeholder="John"
                  value={firstName}
                />
              )
            }
          </FormattedMessage>
          <FormattedMessage {...messages.lastNameLabel} >
            {
              (formattedMessage) => (
                <Field
                  name="lastName"
                  component={FormField} type="text"
                  label={formattedMessage} placeholder="Doe"
                  value={lastName}
                />
              )
            }
          </FormattedMessage>

          <Field
            name="lastName"
            component={FormField}
            type="text"
            label={'Username'}
            placeholder="Dragoon"
            value={username}
          />

          <div style={{ flexGrow: '1', textAlign: 'start' }}>
            <ButtonSubmit style={{ margin: '64px 0px 24px 0px', width: '250px' }} >
              <span>{submitButtonTitle}</span>
            </ButtonSubmit>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

LoginForm.propTypes = {
  ...propTypes,
  locale: PropTypes.string.isRequired,
  submitButtonTitle: PropTypes.string,
  user: PropTypes.object,
};

const Form = reduxForm({
  form: 'profile', // a unique name for the form
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate, // <--- validation function given to redux-form
  warn, // <--- warning function given to redux-form
})(LoginForm);

export default Form;
