/**
 * Created by gaby on 7/5/17.
 */
import React from 'react';
import PropTypes from 'prop-types';


const DrawerHead = ({ headerLabel, style }) => (
  <div style={style}>
    <h5 style={{margin: '0px'}}>
      <span style={{ paddingLeft: '8px' }}>{headerLabel}</span>
      <hr style={{ background: '#c0c0c0', borderBottom: 'transparent' }}/>
    </h5>
  </div>
);

DrawerHead.propTypes = {
  headerLabel: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default DrawerHead;
