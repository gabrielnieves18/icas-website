/**
 * Created by gaby on 7/24/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const Div = styled.div`
  @media all {
    // border: solid thin #d2d2d2;
  }

  @media (min-width: 320px) {
    width: 100%;
    padding: 0 0 15px 0 !important;
    float: none;
  }

  ;

  @media (min-width: 640px) {
    width: 50%;
    padding: 4px 2px 15px 2px !important;
    float: left;
  }

  ;
`;

/* eslint-disable no-tabs */
// language=SCSS
const TextArea = styled.textarea`
  @media all {
    height: 100%;
    width: 100%;
    float: left;
  }

  @media (min-width: 320px) {
    padding: 12px 8px 15px 8px !important
  }

  ;

  @media (min-width: 640px) {

  }

  ;
`;

const errorMSG = (msg) => (
  <div>
    <span>{msg}</span>
    <br /> <br />
  </div>
);

export const renderTextArea = (
  { // unpack props
    input,
    label,
    type,
    style,
    meta: { touched, error, warning },
  }
) => (
  <Div style={style}>
    <div style={{ width: '100%', height: '195px', float: 'left' }} >
      <TextArea {...input} placeholder={label} type={type} style={{ backgroundColor: '#efefef', border: 'solid thin #d2d2d2', float: 'left' }} />
      {
        touched && (
          (error && errorMSG(error)) || (warning && errorMSG(warning))
        )
      }
    </div>
  </Div>
);

renderTextArea.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.object,
  meta: PropTypes.object,
};

export default renderTextArea;
