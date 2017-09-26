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
import { validate, warn } from './RequirementsSectionFormValidation';

const LoginForm = (props) => {
  const {
    handleSubmit,
    submitButtonTitle = "Next Page",
    valid,
    validateRow
  } = props;

  return (
    <Wrapper>
      <H1>What physical or mental requirement do the Adventurer need</H1>
      <H2>Do they need to be 18 years or older or maybe he needs to be unaffected by vertigo. </H2>
      <form style={{flexGrow: 1}} onSubmit={(evt) => evt.preventDefault()}>
        <div style={{flexGrow: 1}}>

          <H3>List all requirements that come to mind</H3>
          <div style={{flexGrow: 1}}>
            <Field
              name={FIELD_NAMES.requirements}
              component={FormField}
              label="Customer requirements"
              placeholder="Every customer need to be able to hike for a minimum of 5 miles."
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
