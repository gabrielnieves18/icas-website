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
import renderDescription from './RendezvousSectionFormField';
import renderTitle from './TitleSectionFormField';
import H1 from './H1';
import H2 from './H2';
import H3 from './H3';
import H4 from './H4';
import SubmitButtonWrapper from './SubmitButtonWrapper'
import messages from './messages';
import Wrapper from './Wrapper';

import { FIELD_NAMES } from './constants'
import { validate, warn } from './RendezvousSectionFormValidation';

const LoginForm = (props) => {
  const {
    handleSubmit,
    submitButtonTitle = "Next Page",
    valid,
    validateRow
  } = props;

  return (
    <Wrapper>
      <H1>Where will you meet with the other adventurers?</H1>
      <H2>
        This address will be automatically calculated from the map pin.
        This location will only be shared with Adventurers that buy this package.
      </H2>
      <form style={{flexGrow: 1}} onSubmit={(evt) => evt.preventDefault()}>
        <div style={{flexGrow: 1}}>

          <H3>Drop the pin on the meeting point</H3>
          <H4>Drag the map to find your spot</H4>
          <div style={{flexGrow: 1, marginBottom: '96px'}}>
            <span>To-Do: add map component</span>
          </div>

          <H3>Whats the name of this location</H3>
          <div style={{flexGrow: 1, marginBottom: '96px'}}>
            <Field
              name={FIELD_NAMES.rendezvousTitle}
              component={renderTitle}
              label="Name this place"
              placeholder="River Road"
            />
          </div>

          <H3>Step by step directions (optional)</H3>
          <H4>The step by step directions are optional but highly recommended</H4>
          <div style={{flexGrow: 1}}>
            <Field
              name={FIELD_NAMES.rendezvousDescription}
              component={renderDescription}
              label="Tell me more about this location"
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
