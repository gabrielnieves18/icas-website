/**
 * Created by gaby on 7/3/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

function ChevronDown(props) {
  const { className, color = '#FFFFFF', width, height } = props;

  const styles = { enableBackground: 'new 0 0 483.083 483.083' };

  return (
    <Wrapper>
      <svg className={className} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="ttp://www.w3.org/1999/xlink" viewBox="0 0 404.257 404.257" width={width} height={height} xmlSpace="preserve" style={styles}>
        <title id="title">Search Icon</title>
        <polygon points="386.257,114.331 202.128,252.427 18,114.331 0,138.331 202.128,289.927 404.257,138.331" fill={color} />
      </svg>
    </Wrapper>
  );
}

ChevronDown.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default ChevronDown;
