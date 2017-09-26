/*
 * Created by gaby on 8/16/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import { propTypes } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form/immutable';

import ButtonSubmit from '../Profile/ButtonSubmit';
import renderDatePickerField from './FieldDatePicker';
import renderTimePickerField from './FieldTimePicker';
import H1 from './H1';
import H3 from './H3';
import H4 from './H4';
import SubmitButtonWrapper from './SubmitButtonWrapper'
import messages from './messages';
import Wrapper from './Wrapper';

import { FIELD_NAMES } from './constants'
import { validate, warn } from './DateSectionFormValidation';

const DateForm = (props) => {
  const {
    handleSubmit,
    submitButtonTitle = "Next Page",
    valid,
    validateRow
  } = props;

  return (
    <Wrapper>
      <H1>When is this adventure taking place?</H1>
      <form style={{flexGrow: 1, width: '100%'}} onSubmit={(evt) => evt.preventDefault()}>
        <div style={{flexGrow: 1}}>

          <H3>Day of event:</H3>
          <H4>This will also be the rendezvous date.</H4>
          <div style={{flexGrow: 1}}>
            <Field
              name={FIELD_NAMES.startingDay}
              component={renderDatePickerField}
              hintText="Starting Date"
              format={null}
            />
          </div>

          <H3>Starting Time:</H3>
          <H4>This will also be the rendezvous time.</H4>
          <div style={{flexGrow: 1}}>
            <Field
              name={FIELD_NAMES.startingTime}
              component={renderTimePickerField}
              hintText="Starting Time"
              format={null}
            />
          </div>

          <SubmitButtonWrapper>
            <ButtonSubmit
              onClick={() => {
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

DateForm.propTypes = {
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
})(DateForm);

export default Form;
