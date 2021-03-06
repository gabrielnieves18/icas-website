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
    background-color: rgb(251, 34, 34);
  }

  20% {
    background-color: #767676;
  }

  40% {
    background-color: #767676;
  }

  60% {
    background-color: #767676;
  }

  80% {
    background-color: #767676;
  }

  100% {
    background-color: rgb(251, 34, 34);
  }
`;

const radiusString = (radius) => (`${radius}px`);

function Circle(props) {
  // language=SCSS
  const LoadingCirc = styled.li`
  @media all {
    animation: ${dropFade} 2.5s linear infinite;
    border-radius: ${props.radius / 2}px;
    height: ${radiusString(props.radius)} !important;
    width: ${radiusString(props.radius)} !important;
    margin: 4px;
  }`;

  return (<LoadingCirc />);
}

Circle.propTypes = {
  radius: PropTypes.number,
};

export default Circle;
