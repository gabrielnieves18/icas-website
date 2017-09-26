/**
 * Created by gaby on 7/24/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const CoordDiv = styled.div`
  @media all {
    // border: solid thin #d2d2d2;
    padding: 4px 2px 15px 2px !important;
    float: left;
    width: 50%;
  }

  @media (min-width: 320px) {
    float: none;
    width: 100%;
  }

  @media (min-width: 640px) {
    float: left;
    width: 50%;
  }
`;

const errorMSG = (msg) => (
  <div>
    <span>{msg}</span>
    <br /> <br />
  </div>
);

export const renderMapCoord = (props) => {
  const { // unpack props
    input,
    label,
    type,
    style,
    meta: { touched, error, warning },
  } = props;

  return (
    <CoordDiv style={style} >
      <div style={{ backgroundColor: '#efefef', width: '100%', border: 'solid thin #d2d2d2' }}>
        <input
          {...input}
          placeholder={label}
          type={type} step="0.0001"
          style={{ paddingLeft: '8px', width: '100%', fontWeight: 'bolder' }}
        />
        {
          touched && (
            (error && errorMSG(error)) || (warning && errorMSG(warning))
          )
        }
      </div>
    </CoordDiv>
  );
};

renderMapCoord.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
  meta: PropTypes.object,
};

export default renderMapCoord;
