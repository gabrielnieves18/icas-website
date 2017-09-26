/*
 * Created by gaby on 8/16/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import { propTypes } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { FieldArray, reduxForm } from 'redux-form/immutable';

import ButtonSubmit from '../Profile/ButtonSubmit';
import FormFields from './CategorySectionFormFields';
import H1 from './H1';
import H2 from './H2';
import H3 from './H3';
import H4 from './H4';
import SubmitButtonWrapper from './SubmitButtonWrapper'
import messages from './messages';
import Wrapper from './Wrapper';

import { FIELD_NAMES } from './constants'
import { validate, warn } from './CategoriesSectionFormValidation';

const CategoryForm = (props) => {
  const {
    handleSubmit,
    submitButtonTitle = "Next Page",
    valid,
    validateRow
  } = props;

  const styles = {
    addItemButton: {
      cursor: 'pointer',
      outline: 'none'
    }
  };

  return (
    <Wrapper>
      <H1>What types of adventures will this package include?</H1>
      <H2>
        Select all the types of adventures that will be cover in your package. For example.
        If your Packages includes hiking up a mountain to later rappel down to the starting
        point, you could say that this package includes “Hyking”and “Rappelling”
      </H2>
      <form style={{flexGrow: 1}} onSubmit={(evt) => evt.preventDefault()}>
        <div style={{flexGrow: 1}}>

          <H3>Use this dropdown to select your adventure categories:</H3>
          <H4>Use the orange “+” button to add more categories.</H4>
          <div style={{ display: 'flex', flexGrow: 1, flexWrap: 'wrap'}}>
            <FieldArray name={FIELD_NAMES.categories} component={FormFields} />
          </div>

          <SubmitButtonWrapper>
            <ButtonSubmit
              ButtonSubmit
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

CategoryForm.propTypes = {
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
})(CategoryForm);

export default Form;
