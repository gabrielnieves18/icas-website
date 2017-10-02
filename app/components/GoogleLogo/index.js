import React from 'react';
import PropTypes from 'prop-types';

function SpotinIconLogo(props) {
  const {
    className,
    style = { enableBackground: 'new 0 0 49.652 49.652' },
    width,
    height } = props;

  const background = { fill: '#FFFFFF'};
  const cls1 = { fill: '#db4437' };
  const cls2 = { fill: '#db4437' };
  const cls3 = { fill: '#db4437' };

  if (style) {
    style.enableBackground = 'new 0 0 49.652 49.652';
  }

  return (
    <svg className={className} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.652 49.652" width={width} height={height} style={style} >
      <title id="title">Facebook Logo</title>
      <g>
        <path style={background} d="M3.3364141375432297,24.825999023491363 C3.3364141375432297,13.719280918518734 12.95330005533161,4.722839253490903 24.825998719267858,4.722839253490903 C36.69869738320412,4.722839253490903 46.3155833009925,13.719280918518734 46.3155833009925,24.825999023491363 C46.3155833009925,35.932717128464 36.69869738320412,44.92915879349184 24.825998719267858,44.92915879349184 C12.95330005533161,44.92915879349184 3.3364141375432297,35.932717128464 3.3364141375432297,24.825999023491363 z" />
      </g>
      <g>
        <path style={cls1} d="M21.5,28.94c-0.161-0.107-0.326-0.223-0.499-0.34c-0.503-0.154-1.037-0.234-1.584-0.241h-0.066     c-2.514,0-4.718,1.521-4.718,3.257c0,1.89,1.889,3.367,4.299,3.367c3.179,0,4.79-1.098,4.79-3.258     c0-0.204-0.024-0.416-0.075-0.629C23.432,30.258,22.663,29.735,21.5,28.94z" />
        <path style={cls2} d="M19.719,22.352c0.002,0,0.002,0,0.002,0c0.601,0,1.108-0.237,1.501-0.687c0.616-0.702,0.889-1.854,0.727-3.077     c-0.285-2.186-1.848-4.006-3.479-4.053l-0.065-0.002c-0.577,0-1.092,0.238-1.483,0.686c-0.607,0.693-0.864,1.791-0.705,3.012     c0.286,2.184,1.882,4.071,3.479,4.121H19.719L19.719,22.352z" />
        <path style={cls3} d="M24.826,0C11.137,0,0,11.137,0,24.826c0,13.688,11.137,24.826,24.826,24.826c13.688,0,24.826-11.138,24.826-24.826     C49.652,11.137,38.516,0,24.826,0z M21.964,36.915c-0.938,0.271-1.953,0.408-3.018,0.408c-1.186,0-2.326-0.136-3.389-0.405     c-2.057-0.519-3.577-1.503-4.287-2.771c-0.306-0.548-0.461-1.132-0.461-1.737c0-0.623,0.149-1.255,0.443-1.881     c1.127-2.402,4.098-4.018,7.389-4.018c0.033,0,0.064,0,0.094,0c-0.267-0.471-0.396-0.959-0.396-1.472     c0-0.255,0.034-0.515,0.102-0.78c-3.452-0.078-6.035-2.606-6.035-5.939c0-2.353,1.881-4.646,4.571-5.572     c0.805-0.278,1.626-0.42,2.433-0.42h7.382c0.251,0,0.474,0.163,0.552,0.402c0.078,0.238-0.008,0.5-0.211,0.647l-1.651,1.195     c-0.099,0.07-0.218,0.108-0.341,0.108H24.55c0.763,0.915,1.21,2.22,1.21,3.685c0,1.617-0.818,3.146-2.307,4.311     c-1.15,0.896-1.195,1.143-1.195,1.654c0.014,0.281,0.815,1.198,1.699,1.823c2.059,1.456,2.825,2.885,2.825,5.269     C26.781,33.913,24.89,36.065,21.964,36.915z M38.635,24.253c0,0.32-0.261,0.58-0.58,0.58H33.86v4.197     c0,0.32-0.261,0.58-0.578,0.58h-1.195c-0.322,0-0.582-0.26-0.582-0.58v-4.197h-4.192c-0.32,0-0.58-0.258-0.58-0.58V23.06     c0-0.32,0.26-0.582,0.58-0.582h4.192v-4.193c0-0.321,0.26-0.58,0.582-0.58h1.195c0.317,0,0.578,0.259,0.578,0.58v4.193h4.194     c0.319,0,0.58,0.26,0.58,0.58V24.253z" />
      </g>
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