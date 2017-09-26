/**
 * Created by gaby on 7/3/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

function ChevronRight(props) {
  const { className, color = '#FFFFFF', width, height } = props;

  const styles = { enableBackground: 'new 0 0 410.258 410.258' };

  return (
    <svg className={className} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 410.258 410.258" width={width} height={height} style={styles} xmlSpace="preserve" >
      <title id="title">Chevron Right</title>
      <polygon points="118.126,0 89.796,28.238 268.223,207.248 89.796,386.258 118.126,414.496 324.7,207.248 " fill={color} />
    </svg>
  );
}

ChevronRight.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default ChevronRight;
