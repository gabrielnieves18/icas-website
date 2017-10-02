/**
 * Created by gaby on 7/5/17.
 */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import DrawerHead from './DrawerHead';
import DrawerHeader from './DrawerHeader';
import Dashboard from './Dasboard';
import Legal from './Legal';
import LocaleToggle from '../LocaleToggle';
import messages from './messages';


const HomeDrawer = (
  {
    avatar,
    currentSection,
    isMobile,
    open,
    style,
    setOpen,
    smallScreen,
    updateAvatar,
    updateCurrentSection,
  }) =>
  (
    <Drawer docked={!isMobile} open={open && isMobile} openSecondary={isMobile} onRequestChange={(open) => setOpen({ open })} >
      <DrawerHead avatar={avatar} setAvatar={updateAvatar} />
      <div style={{ padding: '10px 16px', position: 'absolute', width: '100%', bottom: '0' }}>
        <LocaleToggle />
      </div>
    </Drawer>
);

HomeDrawer.propTypes = {
  avatar: PropTypes.object,
  currentSection: PropTypes.number.isRequired,
  isMobile: PropTypes.bool,
  open: PropTypes.bool,
  style: PropTypes.object,
  setOpen: PropTypes.func.isRequired,
  smallScreen: PropTypes.bool,
  updateAvatar: PropTypes.func,
  updateCurrentSection: PropTypes.func.isRequired,
};

export default HomeDrawer;
