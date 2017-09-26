/*
 * Created by gaby on 8/16/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import { propTypes } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form/immutable';

import ButtonSubmit from '../Profile/ButtonSubmit';
import FormField from './PriceSectionFormField';
import H1 from './H1';
import H2 from './H2';
import H3 from './H3';
import SubmitButtonWrapper from './SubmitButtonWrapper'
import messages from './messages';
import Wrapper from './Wrapper';

import { FIELD_NAMES } from './constants'
import { validate, warn } from './PriceSectionFormValidation';

const PriceSectionForm = (props) => {
  const {
    handleSubmit,
    submitButtonTitle = "Next Page",
    valid,
    validateRow
  } = props;

  // Adding things like, food, snacks, transportation, etc.., will make your trip more valuable.

  return (
    <Wrapper>
      <H1>What will be the cost per person?</H1>
      <H2>Remember to stay competitive.</H2>
      <form style={{flexGrow: 1}} onSubmit={(evt) => evt.preventDefault()}>
        <div style={{flexGrow: 1}}>

          <H3>Staying competitive in the early stages helps with getting your name out there.</H3>
          <div style={{flexGrow: 1}}>
            <Field
              name={FIELD_NAMES.price}
              component={FormField}
              label="Price per person"
              min="1"
              max="500"
              placeholder="$12"
              step="1"
              type="number"
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

PriceSectionForm.propTypes = {
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
})(PriceSectionForm);

export default Form;
