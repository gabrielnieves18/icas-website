/**
 * Created by gaby on 7/3/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

function ChevronLeft(props) {
  const { className, color = '#FFFFFF', width, height } = props;

  const styles = { enableBackground: 'new 0 0 410.258 410.258' };

  return (
    <svg className={className} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 410.258 410.258" width={width} height={height} style={styles} xmlSpace="preserve" >
      <title id="title">Chevron Left</title>
      <polygon points="298.052,24 266.052,0 112.206,205.129 266.052,410.258 298.052,386.258 162.206,205.129 " fill={color} />
    </svg>
  );
}

ChevronLeft.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default ChevronLeft;
