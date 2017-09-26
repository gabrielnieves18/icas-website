/**
 * Created by gaby on 8/16/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import { black } from 'material-ui/styles/colors';


const renderField = (props) => {
  const {
    input,
    label,
    meta: { touched, error, warning, valid, visited },
    multiLine = true,
    placeholder,
    rows = 1,
    type,
  } = props;

  const defaultColor = '#8798AB';
  const flatGreen = '#34D08C';
  const flatRed = '#EC644B';
  const flatYellow = '#f6ca00';

  const styles = {
    defaultStyle: {
      color: defaultColor,
    },
    defaultUnderlineStyle: {
      borderColor: defaultColor,
    },
    focusUnderlineStyle: {
      borderColor: flatGreen,
    },
    errorStyle: {
      color: flatRed,
    },
    errorUnderlineStyle: {
      borderColor: flatRed,
    },
    floatingLabelStyle: {
      color: defaultColor,
    },
    floatingLabelFocusStyle: {
      color: defaultColor,
    },
    inputStyle: {
      color: black,
    },
    warningStyle: {
      color: flatYellow,
    },
    warningUnderlineStyle: {
      borderColor: flatYellow,
    },
  };

  return (
    <div style={{ color: 'black', height: '100%', textAlign: 'justify'}} >
      {
        // Return the default InputField if no warning or error is detected.
        // Display one of the warning InputFields otherwise
        (valid || !touched) && !warning ? (
          <TextField
            {...input}
            errorText={`${700 - input.value.length} characters left`}
            errorStyle={valid ? {color: flatGreen} : {color: defaultColor} }
            floatingLabelText={label}
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            hintText={placeholder}
            hintStyle={styles.defaultStyle}
            inputStyle={styles.inputStyle}
            multiLine={multiLine}
            rows={rows}
            type={type}
            underlineFocusStyle={styles.focusUnderlineStyle}
            underlineStyle={valid ? styles.focusUnderlineStyle : styles.defaultUnderlineStyle }
          />
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
                <TextField
                  {...input}
                  errorText={error}
                  floatingLabelText={label}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  hintText={placeholder}
                  hintStyle={styles.defaultStyle}
                  inputStyle={styles.inputStyle}
                  multiLine={multiLine}
                  rows={rows}
                  type={type}
                />
              ) : (
              warning && (
                <TextField
                  {...input}
                  errorText={warning}
                  errorStyle={styles.warningStyle}
                  floatingLabelText={label}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  hintText={placeholder}
                  hintStyle={styles.defaultStyle}
                  inputStyle={styles.inputStyle}
                  multiLine={multiLine}
                  rows={rows}
                  type={type}
                  underlineFocusStyle={styles.warningUnderlineStyle}
                  underlineStyle={styles.warningUnderlineStyle}
                />
              ))
            )
          )
        )
      }
    </div>
  );
};

renderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  multiLine: PropTypes.bool,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  type: PropTypes.string,
  meta: PropTypes.object,
};

export default renderField;