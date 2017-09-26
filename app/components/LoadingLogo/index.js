/**
 * Created by gaby on 7/17/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import SpotinIconLogo from '../SpotinIconLogo';

import LoadCirc0 from './LoadingCirc0';
import LoadCirc1 from './LoadingCirc1';
import LoadCirc2 from './LoadingCirc2';
import LoadCirc3 from './LoadingCirc3';
import LoadCirc4 from './LoadingCirc4';

function LoadingLogo(props) {
  const { height = 80, width = 150, circleRadius = (width / 6) } = props;

  return (
    <div height={`${height * 1.25}px`} width={`${width * 1.10}px !important`} style={{ textAlign: 'center' }}>
      <SpotinIconLogo height={height} width={width} />
      <div>
        <ol style={{ display: 'flex', padding: '0px', justifyContent: 'center', listStyleType: 'none' }}>
          <LoadCirc0 radius={circleRadius} />
          <LoadCirc1 radius={circleRadius} />
          <LoadCirc2 radius={circleRadius} />
          <LoadCirc3 radius={circleRadius} />
          <LoadCirc4 radius={circleRadius} />
        </ol>
      </div>
    </div>
  );
}

LoadingLogo.propTypes = {
  circleRadius: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default LoadingLogo;
