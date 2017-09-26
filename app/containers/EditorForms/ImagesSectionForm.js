/*
 * Created by gaby on 8/16/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import { propTypes } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { FieldArray, reduxForm } from 'redux-form/immutable';

import ButtonSubmit from '../Profile/ButtonSubmit';
import FormFields from './ImagesSectionFormFields';
import H1 from './H1';
import H2 from './H2';
import SubmitButtonWrapper from './SubmitButtonWrapper'
import messages from './messages';
import Wrapper from './Wrapper';

import { FIELD_NAMES } from './constants'
import { validate, warn } from './ImagesSectionFormValidation';

/*
 * To-Do:
 *
 * Images must be JPEG with a compression of no more than 2.5 MB
 *
 * Resources:
 *    1) https://github.com/xkeshi/image-compressor
 *    2) https://github.com/brunobar79/J-I-C
 */

const ImagesForm = (props) => {
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
      <H1>Show them a glimpse of what's to come!</H1>
      <H2 style={{margin: '0'}}>Show the adventurers the places they will visit, activities they will get to perform. etc...</H2>
      <form style={{flexGrow: 1}} onSubmit={(evt) => evt.preventDefault()}>
        <div style={{flexGrow: 1}}>
          <div style={{ display: 'flex', flexGrow: 1, flexWrap: 'wrap'}}>
            <FieldArray name={FIELD_NAMES.images} component={FormFields} />
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

ImagesForm.propTypes = {
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
})(ImagesForm);

export default Form;
