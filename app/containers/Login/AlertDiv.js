/**
 * Created by gaby on 7/8/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import styled, { keyframes } from 'styled-components';

import Alert from '../../components/Alert';

class Div extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children, className, id, key } = this.props;

    return (
      <div className={className} id={id} key={key}>
        { React.Children.toArray(children) }
        <Alert color="danger">
          <strong>Oh snap!</strong> Something went wrong when attempting to login.
        </Alert>
      </div>
    );
  }
}

Div.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  key: PropTypes.string,
};

/* eslint-disable no-tabs */
// language=SCSS
const dropFade = keyframes`
  0%   { 
    top: 0;
    visibility: visible;
  }
  
  20% { top: 15%; opacity: 1;}
  40% { opacity: 0.80; }
  60% { opacity: 0.60;}
  80% { opacity: 0.40;}
  90% { opacity: 0.20; }
  100% { top: 15%; opacity: 0 }
`;

// language=SCSS
const AlertDiv = styled(Div)`
  @media all {
    animation: ${dropFade} 6.5s linear;
    position: absolute;
    left: 11%;
    //top: 0;
    width: 78%;
    padding: 0;
    visibility: hidden;
  }

  @media (min-width: 320px) {
    //top: 6%
  };

  @media (min-width: 360px) {
  };

  @media (min-width: 640px) {
    //top: 7%
  };

  @media (min-width: 1024px) {
    //top: 5%
    left: 32%;
    width: 36%;
  };
`;

export default AlertDiv;
