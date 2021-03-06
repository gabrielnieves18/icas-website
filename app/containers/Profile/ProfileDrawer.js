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
    updateUserProfile,
  }) =>
  (
    <Drawer docked={!isMobile} open={open || !isMobile} openSecondary={isMobile} onRequestChange={(open) => setOpen({open})}
            containerStyle={{ backgroundImage: 'linear-gradient(-223deg, #ddf6bc 10%, #ddf6bc 19%, rgba(168, 189, 34, 0.65) 85%)' }}>
      <DrawerHead avatar={avatar} setAvatar={updateAvatar} />
      <FormattedMessage {...messages.dashboardLabel} >
        {
          (formattedMSG) => (<DrawerHeader headerLabel={formattedMSG} />)
        }
      </FormattedMessage>
      <Dashboard currentRow={currentSection} style={{ marginBottom: '15%' }} isMobile={isMobile} onSectionTouched={updateCurrentSection} updateUserProfile={updateUserProfile}/>
      <FormattedMessage {...messages.legalLabel} >
        {
          (formattedMSG) => (<DrawerHeader headerLabel={formattedMSG} />)
        }
      </FormattedMessage>
      <Legal />
      <div style={{ padding: '10px 16px', position: `${smallScreen ? 'relative' : 'absolute' }`, width: '100%', bottom: '0'}}>
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
  updateUserProfile: PropTypes.func,
};

export default HomeDrawer;
