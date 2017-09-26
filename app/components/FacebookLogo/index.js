import React from 'react';
import PropTypes from 'prop-types';

function SpotinIconLogo(props) {
  const {
    className,
    style = { enableBackground: 'new 0 0 291.319 291.319' },
    width,
    height } = props;

  const cls1 = { fill: '#3B5998' };
  const cls2 = { fill: '#FFFFFF' };

  if (style) {
    style.enableBackground = 'new 0 0 291.319 291.319';
  }

  return (
    <svg className={className} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 291.319 291.319" width={width} height={height} style={style} >
      <title id="title">Facebook Logo</title>
      <path style={cls1} d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66c0,80.45-65.21,145.659-145.66,145.659 S0,226.109,0,145.66C0,65.219,65.21,0,145.659,0z" />
      <path style={cls2} d="M163.394,100.277h18.772v-27.73h-22.067v0.1c-26.738,0.947-32.218,15.977-32.701,31.763h-0.055 v13.847h-18.207v27.156h18.207v72.793h27.439v-72.793h22.477l4.342-27.156h-26.81v-8.366 C154.791,104.556,158.341,100.277,163.394,100.277z" />
    </svg>
  );
}

SpotinIconLogo.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number.isRequired,
  style: PropTypes.object,
  width: PropTypes.number.isRequired,
};

export default SpotinIconLogo;
