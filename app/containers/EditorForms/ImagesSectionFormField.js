/**
 * Created by gaby on 8/16/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import ImageCompressor from 'image-compressor';

import { black } from 'material-ui/styles/colors';

import Img from './Img';
import ImagesAddButton from './ImagesAddButton';
import ImagesRemoveButtonWrapper from './ImagesRemoveButtonWrapper';

const handleChange  = (evt, addImage) => {
  evt.preventDefault();
  const file = evt.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    addImage(file, reader.result);
  };
};

const compress = (file, onSuccess) => {
  if (!file) {
    return;
  }

  new ImageCompressor(file, {
    quality: 0.3,
    mimeType: 'image/jpeg',
    success(result) {
      const formData = new FormData();

      formData.append('file', result);

      console.log('ResultSize:', result.size)

      // Send the compressed image file to server with XMLHttpRequest.
      // axios.post('/path/to/upload', formData).then(() => {
      //   console.log('Upload success!');
      // });
    },
    error(e) {
      console.log(e.message);
    },
  });
};

const renderField = (props) => {
  const {
    addImage,
    input,
    meta: { touched, error, warning, valid, visited },
    removeImage,
    onChange,
    image,
  } = props;

  const flatRed = '#EC644B';
  const flatYellow = '#f6ca00';

  const styles = {
    wrapper: {
      color: 'black',
      //textAlign: 'justify',
      //marginLeft: '-64px'
      height: '100%',
      width: '100%',
    },
    input: {
      cursor: 'pointer',
      height: '100%',
      opacity: '0',
      position: 'relative',
      top: '-38px',
      width: '100%',
    },
    span: {
      left: '47%',
      position: 'relative',
      top: '40%',
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
          image.image && (
            <div style={{flexGrow: '1'}}>
              <ImagesRemoveButtonWrapper visible={true} >
                <button
                  onClick={removeImage}
                  type="button"
                  style={{height: '100%', width: '100%', outline: 'none'}}
                  disabled={false}
                >X</button>
              </ImagesRemoveButtonWrapper>
              <Img
                src={image.image.url}
                style={styles.image}
              />
            </div>
          ) || (
            <ImagesAddButton>
              <span style={styles.span}>+</span>
              <input
                type="file"
                accept="image/*"
                style={styles.input}
                onChange={(evt) => handleChange(evt, addImage)}
              />
            </ImagesAddButton>
          )
        ) : (
          // There is some weird bug that when a warning is triggered, and the TextField
          // is in pristine condition, it deletes the TextField. This is do to "touched"
          // being false while the component is "pristine". The "OR-ing" of "(warning && visited)"
          // To the "touched" validation fixes this bug. I don't like this fix. It seems
          // hacky but its a quick fix that's easy to understand.
          (touched || (warning && visited)) && (
            // If touched and error not empty, display a span with the error
            // If touched and warning not empty, display a span with the warning
            (error ? (
                <div>
                  <ImagesAddButton>
                    <input
                      type="file"
                      accept="image/*"
                      style={styles.input}
                      onChange={(evt) => handleChange(evt, addImage)}
                    />
                    <span style={styles.span}>+</span>
                  </ImagesAddButton>
                  <span style={styles.error}>{error}</span>
                </div>
              ) : (
              warning && (
                <div>
                  <ImagesAddButton>
                    <input
                      type="file"
                      accept="image/*"
                      style={styles.input}
                      onChange={(evt) => handleChange(evt, addImage)}
                    />
                    <span style={styles.span}>+</span>
                  </ImagesAddButton>
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
  addImage: PropTypes.func.isRequired,
  input: PropTypes.object,
  meta: PropTypes.object,
  removeImage: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  image: PropTypes.object,
};

export default renderField;
