/**
 * Created by gaby on 8/16/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import { black } from 'material-ui/styles/colors';

const renderField = (props) => {
  const {
    children,
    input,
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

  return (
    <div style={styles.wrapper} >
      {
        // Return the default InputField if no warning or error is detected.
        // Display one of the warning InputFields otherwise
        (valid || !touched) && !warning ? (
          <select {...input} style={{marginBottom: '8px'}} >
            { children }
          </select>
        ) : (
          // There is some weird bug that when a warning is triggered, and the TextField
          // is in pristine condition, it deletes the TextField. This is do to "touched"
          // being false while the TextField is "pristine". The "OR-ing" of "(warning && visited)"
          // To the "touched" validation fixes this bug. I don't like this fix. It seems
          // hacky but its a quick fix that's easy to understand.
          (touched || (warning && visited)) && (
            // If touched and error not empty, display a span with the error
            // If touched and warning not empty, display a span with the warning
            (error ? (
                <div>
                  <select {...input} style={{marginBottom: '8px'}} >
                    { children }
                  </select>
                  <span style={styles.error}>{error}</span>
                </div>
              ) : (
              warning && (
                <div>
                  <select {...input} style={{marginBottom: '8px'}} >
                    { children }
                  </select>
                  <span style={styles.warning} >{warning}</span>
                </div>
              ))
            )
          )
        )
      }
    </div>
  );
};

renderField.propTypes = {
  children: PropTypes.node,
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default renderField;
