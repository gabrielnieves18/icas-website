/**
 * Created by gaby on 7/3/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

function SVGPushPin(props) {
  const {
    className,
    color,
    width, height,
    style = { enableBackground: 'new 0 0 512 512' }
  } = props;

  return (
    <svg className={className} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="ttp://www.w3.org/1999/xlink" viewBox="0 0 485.213 485.212" width={width} height={height} xmlSpace="preserve" style={style}>
      <title id="title">PushPin Icon</title>
      <path fill={!color ? "#D7DEED" : color } d="M268.541,386.595L256,512l-12.541-125.405c-0.467-4.67-0.701-9.361-0.701-14.054V256h26.483v116.542 C269.241,377.235,269.007,381.926,268.541,386.595z" />
      <path fill={!color ? "#D2555A" : color } d="M326.621,26.483V8.828H185.379v17.655h7.977c5.041,0,9.057,4.213,8.818,9.248l-7.967,167.304h123.586 l-7.967-167.304c-0.239-5.035,3.777-9.248,8.818-9.248C318.644,26.483,326.621,26.483,326.621,26.483z" />
      <g>
        <path fill={!color ? "#FF6464" : color } d="M335.448,26.483H176.552c-4.875,0-8.828-3.953-8.828-8.828V8.828c0-4.875,3.953-8.828,8.828-8.828 h158.897c4.875,0,8.828,3.953,8.828,8.828v8.828C344.276,22.53,340.323,26.483,335.448,26.483z" />
        <path fill={!color ? "#FF6464" : color } d="M194.207,203.034l-46.613,38.844c-4.025,3.354-6.353,8.323-6.353,13.564v9.386h229.517v-9.386 c0-5.239-2.327-10.209-6.353-13.564l-46.613-38.844H194.207z" />
      </g>
      <path fill={!color ? "#D2555A" : color } d="M361.931,273.655H150.069c-4.875,0-8.828-3.953-8.828-8.828V256c0-4.875,3.953-8.828,8.828-8.828 h211.862c4.875,0,8.828,3.953,8.828,8.828v8.828C370.759,269.703,366.806,273.655,361.931,273.655z" />
      <path fill={!color ? "#BE4B50" : color } d="M238.293,203.034l1.32-167.305c0-9.87-5.707-10.494-5.707-18.074V8.828h-48.526v17.655h7.977 c5.041,0,9.057,4.213,8.818,9.247l-7.967,167.305H238.293z" />
      <g>
        <path fill={!color ? "#D2555A" : color } d="M233.906,17.655V8.828c0-4.875,4.256-8.828,9.506-8.828h-66.86c-4.875,0-8.828,3.953-8.828,8.828 v8.828c0,4.875,3.953,8.828,8.828,8.828h60.577C235.587,23.868,233.906,21.78,233.906,17.655z" />
        <path fill={!color ? "#D2555A" : color } d="M230.57,241.878l7.723-38.844h-44.086l-46.613,38.844c-4.024,3.354-6.353,8.323-6.353,13.564v9.386 h88.276c0,0,0-6.621,0-8.828C229.517,249.56,229.903,245.233,230.57,241.878z" />
      </g>
      <path fill={!color ? "#BE4B50" : color } d="M229.517,264.828c0,0,0-6.621,0-8.828c0-3.528,0.125-6.38,0.34-8.828h-79.788 c-4.875,0-8.828,3.953-8.828,8.828v8.828c0,4.875,3.953,8.828,8.828,8.828h88.954C233.773,273.655,229.517,269.703,229.517,264.828z" />
      <rect x="242.759" y="273.655" fill={!color ? "#C7CFE2" : color } width="26.483" height="17.655"/>
    </svg>
  );
}

SVGPushPin.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  style: PropTypes.object,
};

export default SVGPushPin;
