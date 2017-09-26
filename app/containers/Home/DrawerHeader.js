/**
 * Created by gaby on 7/5/17.
 */
import React from 'react';
import PropTypes from 'prop-types';


const DrawerHead = ({ headerLabel }) => (
  <div>
    <h5 style={{ color: '#9B9B9B', margin: '0px' }}>
      <span style={{ paddingLeft: '8px' }}>{headerLabel}</span>
      <hr style={{ background: '#9B9B9B' }}/>
    </h5>
  </div>
);

DrawerHead.propTypes = {
  headerLabel: PropTypes.string.isRequired,
};

export default DrawerHead;
