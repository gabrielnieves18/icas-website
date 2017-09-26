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
import FormField from './LanguageSectionFormField';
import H1 from './H1';
import H2 from './H2';
import H3 from './H3';
import SubmitButtonWrapper from './SubmitButtonWrapper'
import messages from './messages';
import Wrapper from './Wrapper';

import { LOCALE_i18n_MAP_OFFERINGS } from '../../i18n';
import { FIELD_NAMES } from './constants'
import { validate, warn } from './LanguageSectionFormValidation';

const LoginForm = (props) => {
  const {
    handleSubmit,
    submitButtonTitle = "Next Page",
    valid,
    validateRow
  } = props;

  return (
    <Wrapper>
      <H1>Main language for this trip package</H1>
      <H2>This is the language that you will be using for the creation of this package and during the adventure</H2>
      <form style={{flexGrow: 1}} onSubmit={(evt) => {
        evt.preventDefault();
      }}>
        <div style={{flexGrow: 1}}>
          <H3 style={{marginBottom: '16px'}}>Use this dropdown to select your language:</H3>
          <div style={{flexGrow: 1}}>
            <Dropdown>
              <Field name={FIELD_NAMES.languageSelector} component={FormField} >
                {
                  Object.keys(LOCALE_i18n_MAP_OFFERINGS).map((key) => (
                    <option value={key} key={key} >{LOCALE_i18n_MAP_OFFERINGS[key].description}</option>
                  ))
                }
              </Field>
            </Dropdown>
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
