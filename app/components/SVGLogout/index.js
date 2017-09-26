/**
 * Created by gaby on 7/3/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

function SVGLogout(props) {
  const {
    className,
    color = '#FFFFFF',
    width = 64, height = 64,
    style = { enableBackground: 'new 0 0 612 612' }
  } = props;

  const styles = {
    iconColor: {fill: color}
  };

  return (
    <svg className={className} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="ttp://www.w3.org/1999/xlink" viewBox="0 0 612 612" width={width} height={height} xmlSpace="preserve" style={style} >
      <title id="logout">Logout Icon</title>
      <polygon style={styles.iconColor} points="222.545,319.909 577.228,319.909 500.728,445.091 528.546,445.091 612,306 528.546,166.909 500.728,166.909 577.228,292.146 222.545,292.146 "/>
      <polygon style={styles.iconColor} points="0,612 417.272,612 417.272,431.182 389.454,431.182 389.454,584.182 27.818,584.182 27.818,27.818 389.454,27.818 389.454,180.818 417.272,180.818 417.272,0 0,0 "/>
    </svg>
  );
}

SVGLogout.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.object,
};

export default SVGLogout;
