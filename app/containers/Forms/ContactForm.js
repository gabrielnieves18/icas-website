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

import { validate, warn } from './ContactFormValidation';

const LoginForm = (props) => {
  const {
    handleSubmit,
    locale,
    pristine,
    submitButtonTitle = "Next Page",
    valid,
  } = props;

  const styles = {
    header: {
      padding: '0',
      margin: '0',
      textAlign: 'justify',
      fontFamily: 'Helvetica Neue'
    },
    description: {
      padding: '0',
      margin: '0',
      textAlign: 'justify',
      fontFamily: 'Helvetica Neue',
      fontWeight: '400'
    },
    button: {
      margin: '64px 0px 24px 0px',
      width: '250px',
    }
  };

  return (
    <Wrapper>
      <form style={{ flexGrow: 1 }} onSubmit={handleSubmit}>
        <div style={{ flexGrow: 1 }}>
          <FormattedMessage {...messages.emailLabel}>
            {
              (formattedMSG) => <h2 style={styles.header}>{formattedMSG}</h2>
            }
          </FormattedMessage>
          <FormattedMessage {...messages.emailLabel} >
            {
              (formattedMessage) => (
                <Field name="email_1" component={FormField} type="email" label={formattedMessage} placeholder="johndoe@email.com" />
              )
            }
          </FormattedMessage>
          <FormattedMessage {...messages.retypeEmailLabel} >
            {
              (formattedLabel) => (
                <FormattedMessage {...messages.oneMoreTimeLabel} >
                  {
                    (formattedPlaceholder) => (
                      <Field name="email_2" component={FormField} type="email" label={formattedLabel} placeholder={formattedPlaceholder} />
                    )
                  }
                </FormattedMessage>
              )
            }
          </FormattedMessage>

          <div style={{ flexGrow: 1, marginTop: '42px' }}>
            <FormattedMessage {...messages.phoneNumberLabel}>
              { (formattedMSG) => <h2 style={styles.header}>{formattedMSG}</h2> }
            </FormattedMessage>
            <FormattedMessage {...messages.phoneNumberCommentLabel}>
              { (formattedMSG) => <h5 style={styles.description}>{formattedMSG}</h5> }
            </FormattedMessage>
          </div>
          <FormattedMessage {...messages.phoneNumberLabel} >
            {
              (formattedMessage) => (
                <Field name="phone_number_1" component={FormField} type='tel' label={formattedMessage} placeholder="(787) 123-4567" />
              )
            }
          </FormattedMessage>
          <FormattedMessage {...messages.oneMoreTimeLabel} >
            {
              (formattedLabel) => (
                <Field name="phone_number_2" component={FormField} type='tel' label={formattedLabel} placeholder="(787) 123-4567" />
              )
            }
          </FormattedMessage>
          <div style={{ flexGrow: '1', textAlign: 'start' }}>
            <ButtonSubmit style={{ margin: '64px 0px 24px 0px', width: '250px' }} >
              {/*<FormattedMessage {...messages.submitLabel} />*/}
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
};

const Form = reduxForm({
  form: 'profile', // a unique name for the form
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate, // <--- validation function given to redux-form
  warn, // <--- warning function given to redux-form
})(LoginForm);

export default Form;
