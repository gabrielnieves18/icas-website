/*
 * Created by gaby on 8/16/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import { propTypes } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form/immutable';

import ButtonSubmit from '../Profile/ButtonSubmit';
import FormField from './AboutMeFormField';
import messages from './messages';
import Wrapper from './Wrapper';

import { validate, warn } from './AccountFormValidation';

const AccountForm = (props) => {
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
      fontWeight: '400',
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
          <FormattedMessage {...messages.accountTitleLabel} >
            { (formattedMSG) => <h2 style={styles.header}>{formattedMSG}</h2> }
          </FormattedMessage>
          <FormattedMessage {...messages.accountDescriptionLabel} >
            { (formattedMSG) => <h5 style={styles.description}>{formattedMSG}</h5> }
          </FormattedMessage>
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
                      <Field name="password_2" component={FormField} type="password" label={formattedLabel} placeholder={formattedPlaceholder} />
                    )
                  }
                </FormattedMessage>
              )
            }
          </FormattedMessage>

          <div style={{ flexGrow: '1', textAlign: 'start' }}>
            <ButtonSubmit style={styles.button} >
              <span>{ submitButtonTitle }</span>
            </ButtonSubmit>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

AccountForm.propTypes = {
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
})(AccountForm);

export default Form;
