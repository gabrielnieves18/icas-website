/**
 * Created by gaby on 8/16/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import { black } from 'material-ui/styles/colors';
import { Field } from 'redux-form/immutable';

import CategoriesAddButtonMobile from './CategoriesAddButtonMobile';
import CategoriesAddButtonWrapper from './CategoriesAddButtonWrapper';
import FormField from './TitleSectionFormField';

import { CATEGORIES } from './constants'

const renderFields = (props) => {
  const {
    fields,
    meta: { touched, error, warning, valid, visited },
  } = props;

  const flatRed = '#EC644B';
  const flatYellow = '#f6ca00';

  const styles = {
    wrapper: {
      color: 'black',
      height: '100px',
      textAlign: 'justify',
      margin: 'auto'
    },
    error: {
      color: flatRed,
    },
    warning: {
      color: flatYellow,
    },
  };

  if (fields.length < 1) {
    fields.push({});
  }

  return (
    /*
     * We loose Focus if we define the <select> tag outside of the return function.
     * That is the reason why we "copy paste" the select component instead of defining
     * a function and reusing that function.
     *
     * If this component looses focus, the user will need to click/touch it twice
     * in order for it to regain focus. While not harmful, it is very annoying to the user.
     */
    <div>
      {
        fields.map((listItem, index) => (
          <div key={index} style={{display: 'flex', margin: '32px 0', flexWrap: 'wrap'}}>
            <Field
              name={`${listItem}.packingListItem`}
              component={FormField}
              label="Item name"
              placeholder="Towel"
            />
            <CategoriesAddButtonWrapper visible={index > 0} >
              <button
                onClick={() => fields.remove(index)}
                type="button"
                style={{height: '100%', width: '100%', outline: 'none'}}
                disabled={index === 0}
              >-</button>
            </CategoriesAddButtonWrapper>
          </div>
        ))
      }
      {
        error && (
          <div>
            <span style={styles.error}>{error}</span>
          </div>
        )
      }
      <CategoriesAddButtonMobile
        onClick={() => {
          !error ? fields.push({}) : null;
        }}
        type="button"
        style={{ margin: '32px 0 0' }}
      >
        + Add category
      </CategoriesAddButtonMobile>
    </div>
  );
};

renderFields.propTypes = {
  field: PropTypes.object,
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default renderFields;