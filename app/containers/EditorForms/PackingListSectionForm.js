/*
 * Created by gaby on 8/16/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import { propTypes } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { FieldArray, reduxForm } from 'redux-form/immutable';

import ButtonSubmit from '../Profile/ButtonSubmit';
import FormFields from './PackingListSectionFormFields';
import H1 from './H1';
import H2 from './H2';
import H3 from './H3';
import H4 from './H4';
import SubmitButtonWrapper from './SubmitButtonWrapper'
import messages from './messages';
import Wrapper from './Wrapper';

import { FIELD_NAMES } from './constants'
import { validate, warn } from './PackingListSectionFormValidation';

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
      <H1>What should be on the customers backpack</H1>
      <H2>
        List the items that the user must have as well as the items that
        would be nice to have on the event of an unforeseen event, like rain.
      </H2>
      <form style={{flexGrow: 1}} onSubmit={(evt) => evt.preventDefault()}>
        <div style={{flexGrow: 1}}>

          <H3>Note:</H3>
          <H4>Type: "No items needed". If the customer does not need any items for the trip.</H4>
          <div style={{ display: 'flex', flexGrow: 1, flexWrap: 'wrap'}}>
            <FieldArray name={FIELD_NAMES.packingList} component={FormFields} />
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
