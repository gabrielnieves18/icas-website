/*
 * Created by gaby on 8/16/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import { propTypes } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form/immutable';

import ButtonSubmit from '../Profile/ButtonSubmit';
import Dropdown from '../../components/SelectorWrapper/index';
import FormField from './DescriptionSectionFormField';
import H1 from './H1';
import H2 from './H2';
import H3 from './H3';
import SubmitButtonWrapper from './SubmitButtonWrapper'
import messages from './messages';
import Wrapper from './Wrapper';

import { FIELD_NAMES } from './constants'
import { validate, warn } from './DescriptionSectionFormValidation';

const LoginForm = (props) => {
  const {
    handleSubmit,
    submitButtonTitle = "Next Page",
    valid,
    validateRow
  } = props;

  return (
    <Wrapper>
      <H1>What can the adventurer expect from this package?</H1>
      <H2>This can be use a primer that will get the adventurer pumped for your trip.</H2>
      <form style={{flexGrow: 1}} onSubmit={(evt) => evt.preventDefault()}>
        <div style={{flexGrow: 1}}>

          <H3>Don't worry about details. We will ask this later on the form.</H3>
          <div style={{flexGrow: 1}}>
            <Field
              name={FIELD_NAMES.description}
              component={FormField}
              label="Tell me more about this trip!"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           Quisque congue tempor mauris, porta pellentesque metus laoreet eget.
                           Nullam maximus lectus ante, euismod porta nulla sodales vitae."
              type="textarea"
            />
          </div>

          <SubmitButtonWrapper>
            <ButtonSubmit
              onClick={ () => {
                validateRow(valid);
                handleSubmit();
              }}
              type="button"
              style={{margin: '64px auto 24px auto', width: '250px'}}
            >
              <span>{submitButtonTitle}</span>
            </ButtonSubmit>
          </SubmitButtonWrapper>
        </div>
      </form>
    </Wrapper>
  );
};

LoginForm.propTypes = {
  ...propTypes,
  locale: PropTypes.string.isRequired,
  submitButtonTitle: PropTypes.string,
  validateRow: PropTypes.func.isRequired,
};

const Form = reduxForm({
  form: 'editor', // a unique name for the form
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate, // <--- validation function given to redux-form
  warn, // <--- warning function given to redux-form
})(LoginForm);

export default Form;
