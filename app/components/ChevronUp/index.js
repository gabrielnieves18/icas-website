/**
 * Created by gaby on 7/25/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

function ChevronUp(props) {
  const { className, color = '#FFFFFF', width, height } = props;

  const styles = { enableBackground: 'new 0 0 46.001 46.001' };

  return (
    <svg className={className} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 46.001 46.001" width={width} height={height} style={styles} xmlSpace="preserve" >
      <title id="title">Chevron Up</title>
      <g>
        <path d="M5.906,34.998c-1.352,1.338-3.541,1.338-4.893,0c-1.35-1.338-1.352-3.506,0-4.846l19.54-19.148  c1.352-1.338,3.543-1.338,4.895,0l19.539,19.148c1.352,1.34,1.352,3.506,0,4.846c-1.352,1.338-3.541,1.338-4.893,0L23,19.295   L5.906,34.998z" fill={color} />
      </g>
    </svg>
  );
}

ChevronUp.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default ChevronUp;
