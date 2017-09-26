/**
 * Created by gaby on 7/23/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const Alert = (props) => {
  const {
    danger,
    message,
    staticDiv,
    style = {
      color: 'white',
      borderColor: 'green',
      backgroundColor: '#00B16A',
    },
    warning } = props;

  style.borderColor = 'green';
  style.backgroundColor = '#00B16A';

  if (danger) {
    style.borderColor = '#a94442';
    style.backgroundColor = '#ec644b';
  } else if (warning) {
    style.borderColor = '#deb300';
    style.backgroundColor = '#f6ca00';
  }

  if (staticDiv) {
    return (
      <div style={style}>
        <span> I am an alert </span>
      </div>
    );
  }

  /* eslint-disable no-tabs */
  // language=SCSS
  const dropFade = keyframes`
    0%   {
      top: 0;
      visibility: visible;
    }

    20% { top: 16%; opacity: 1;}
    40% { opacity: 0.80; }
    60% { opacity: 0.60;}
    80% { opacity: 0.40;}
    90% { opacity: 0.20; }
    100% { top: 16%; opacity: 0 }
  `;

  /* eslint-disable no-tabs */
  // language=SCSS
  const AlertWrapper = styled.div`
  /* Adapt the colours based on the alert type (danger, success, or warning) */
  @media all {
    animation: ${dropFade} 8s ease-in;
    background: ${style.backgroundColor};
    width: ${style.width};
    border-radius: 5%;
    position: absolute;
    padding: 8px 32px;
    text-align: center;
    left: 75%;
    visibility: hidden;
    z-index: 300;
  }

  @media (min-width: 320px) {
    left: 25%;
  }
  
  @media (min-width: 640px) {
    left: 75%;
  }

  @media (min-width: 1024px) {
    left: 75%;
  }
`;

  return (
    <AlertWrapper style={style}>
      <span>{ !message ? 'I am an alert' : message }</span>
    </AlertWrapper>
  );
};

Alert.propTypes = {
  danger: PropTypes.bool,
  message: PropTypes.string,
  staticDiv: PropTypes.bool,
  success: PropTypes.bool,
  style: PropTypes.object,
  warning: PropTypes.bool,
};

export default Alert;
