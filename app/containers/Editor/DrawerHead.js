/**
 * Created by gaby on 7/5/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import SpotinIconLogo from '../../components/SpotinIconLogo';

const DrawerHead = ({ style }) => {

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{alignSelf: 'center', flexGrow: '1', margin: '24px 16px 44px 0px'}}>
        <SpotinIconLogo width={140} height={60} white />
      </div>
    </div>
  );
};

DrawerHead.propTypes = {
  style: PropTypes.object,
};

export default DrawerHead;
