/**
 * Created by gaby on 8/16/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import { black } from 'material-ui/styles/colors';
import { Field } from 'redux-form/immutable';

import FormField from './ImagesSectionFormField';

import { CATEGORIES } from './constants'

const renderFields = (props) => {
  const {
    fields,
    meta: { touched, error, warning, valid, visited },
    onChange,
  } = props;

  const values = fields.getAll();
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
    fields.push({})
  }

  return (
    <div style={{width: '100%'}}>
      {
        fields.map((image, index) => (
          <div key={index} style={{display: 'flex', margin: '32px 0', flexWrap: 'wrap'}}>
            <Field
              name={`${image}.image`}
              component={FormField}
              type="file"
              addImage={(file, url) => fields.push({
                image: {
                  lastModified: file.lastModified,
                  lastModifiedDate: file.lastModifiedDate,
                  name: file.name,
                  size: file.size,
                  type: file.type,
                  webkitRelativePath: file.webkitRelativePath,
                  url,
                }})
              }
              removeImage={() => fields.remove(index)}
              image={values.get(index)}
            />
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
    </div>
  );
};

renderFields.propTypes = {
  field: PropTypes.object,
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default renderFields;