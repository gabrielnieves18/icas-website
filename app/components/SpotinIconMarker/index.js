import React from 'react';
import PropTypes from 'prop-types';

function SpotinIconLogo(props) {
  const { className, width, height, white } = props;

  const cls3 = { opacity: 0.2 };
  const cls4 = { fill: '#c0ca34' };
  const cls5 = {
    fill: '#231f20',
    opacity: 0.1,
  };

  if (white) {
    cls4.fill = '#FFFFFF';
    cls5.fill = cls4.fill;
  }

  return (
    <svg className={className} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 136.42" width={width} height={height} >
      <title id="title">Spotin Marker Logo</title>
      <path style={cls3} d="m35.395483,119.408892c-10.45,0.82 -18.34,4.47 -18.34,8.86c0,5 10.19,9 22.76,9s22.76,-4 22.76,-9c0,-4.41 -8,-8.09 -18.52,-8.87l-4.34,9.44l-4.32,-9.43z" />
      <path style={cls4} d="m76.985483,39.198892c0,-21.16 -16.68,-38.3 -37.26,-38.3s-37.26,17.15 -37.26,38.3a39,39 0 0 0 4.24,17.74l0,0l0.21,0.4l0.09,0.17l28.39,61.9l4.32,9.42l4.34,-9.44l30,-65.26l0,-0.09l0.07,-0.16l0,0a39.11,39.11 0 0 0 2.86,-14.68zm-37.26,19.22a18.9,18.9 0 1 1 18.9,-18.9a18.9,18.9 0 0 1 -18.91,18.9l0.01,0z" />
      <path style={cls5} d="m77.429927,39.198892c0,-21.16 -16.68,-38.3 -37.26,-38.3l0,19.74a18.89,18.89 0 0 1 0,37.77l0,70.43l34.32,-74.7l0,-0.09l0.07,-0.16l0,0a39.11,39.11 0 0 0 2.87,-14.69z" />
    </svg>
  );
}

SpotinIconLogo.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  white: PropTypes.bool,
};

export default SpotinIconLogo;
