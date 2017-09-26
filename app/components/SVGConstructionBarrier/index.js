/**
 * Created by gaby on 7/3/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

function SVGConstructionBarrier(props) {
  const {
    className,
    color = null,
    width = 64, height = 64,
    style = { enableBackground: 'new 0 0 512 512' }
  } = props;


  const styles = {
    maroon: {fill: `${color ? color : '#6B4841'}`},
    navyBlue: {fill: `${color ? color : '#556080'}`},
    flatRed: {fill: `${color ? color : '#E15649'}`},
    flatYellow: {fill: `${color ? color : '#ECBA16'}`},
  };

  return (
    <svg className={className} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="ttp://www.w3.org/1999/xlink" viewBox="0 0 512 512" width={width} height={height} xmlSpace="preserve" style={style} >
      <title id="title">Barrier Icon</title>
      <g>
        <path style={styles.maroon} d="M79.448,247.172h35.31v-35.31h-35.31V247.172z" />
        <path style={styles.maroon} d="M397.241,247.172h35.31v-35.31h-35.31V247.172z" />
        <path style={styles.maroon} d="M414.897,70.621c-6.179,0-12.359-1.766-17.655-5.297v40.607h35.31V65.324 C427.255,68.855,421.076,70.621,414.897,70.621" />
        <path style={styles.maroon} d="M97.103,70.621c-6.179,0-12.359-1.766-17.655-5.297v40.607h35.31V65.324 C109.462,68.855,103.283,70.621,97.103,70.621" />
      </g>

      <path style={styles.navyBlue} d="M0,211.862h512V105.931H0V211.862z" />
      <path style={styles.flatRed} d="M132.414,35.31c0-19.421-15.89-35.31-35.31-35.31s-35.31,15.89-35.31,35.31s15.89,35.31,35.31,35.31 S132.414,54.731,132.414,35.31" />

      <g>
        <path style={styles.maroon} d="M79.448,512h35.31V353.103h-35.31V512z" />
        <path style={styles.maroon} d="M397.241,512h35.31V353.103h-35.31V512z" />
      </g>

      <path style={{ fill: '#4C2C28' }} d="M114.759,467.862h282.483v-52.966H114.759V467.862z" />

      <g>
        <path style={styles.flatYellow} d="M67.972,105.931L0,173.903v37.959h87.393l105.931-105.931H67.972z" />
        <path style={styles.flatYellow} d="M211.862,211.862h124.469l105.931-105.931H317.793L211.862,211.862z" />
      </g>

      <path style={styles.navyBlue} d="M336.331,211.862H460.8l50.317-50.317v-55.614h-69.738L336.331,211.862z" />
      <path style={styles.flatYellow} d="M512,211.862v-50.317l-50.317,50.317H512z" />
      <path style={styles.navyBlue} d="M0,353.103h512V247.172H0V353.103z" />

      <g>
        <path style={styles.flatYellow} d="M67.972,247.172L0,315.145v37.959h87.393l105.931-105.931H67.972z" />
        <path style={styles.flatYellow} d="M211.862,353.103h124.469l105.931-105.931H317.793L211.862,353.103z" />
      </g>

      <path style={styles.navyBlue} d="M336.331,353.103H460.8l50.317-50.317v-55.614h-69.738L336.331,353.103z" />
      <path style={styles.flatYellow} d="M512,353.103v-50.317l-50.317,50.317H512z" />
      <path style={styles.flatRed} d="M379.586,35.31c0-19.421,15.89-35.31,35.31-35.31c19.421,0,35.31,15.89,35.31,35.31 s-15.89,35.31-35.31,35.31C395.476,70.621,379.586,54.731,379.586,35.31" />
    </svg>
  );
}

SVGConstructionBarrier.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.object,
};

export default SVGConstructionBarrier;
