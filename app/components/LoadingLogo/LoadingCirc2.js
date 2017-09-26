/**
 * Created by gaby on 7/17/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import styled, { keyframes } from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const dropFade = keyframes`
  0% {
    background-color: #828282;
  }

  20% {
    background-color: #828282;
  }

  40% {
    background-color: #a8bd22;
  }

  60% {
    background-color: #828282;
  }

  80% {
    background-color: #828282;
  }

  100% {
    background-color: #828282;
  }
`;

const radiusString = (radius) => (`${radius}px`);

function Circle({ radius = 24 }) {
  // language=SCSS
  const LoadingCirc = styled.li`
  @media all {
    animation: ${dropFade} 2.5s linear infinite;
    border-radius: ${radius / 2}px;
    height: ${radiusString(radius)} !important;
    width: ${radiusString(radius)} !important;
    margin: 4px;
  }`;

  return (<LoadingCirc />);
}

Circle.propTypes = {
  radius: PropTypes.number,
};

export default Circle;

