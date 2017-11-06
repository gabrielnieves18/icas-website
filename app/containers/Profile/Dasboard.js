/**
 * Created by gaby on 7/5/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import SVGPhone from 'material-ui/svg-icons/hardware/smartphone';
import SVGSettings from 'material-ui/svg-icons/action/settings';

import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router';

import MenuItemWrapper from './MenuItemWrapper';
import MenuItemSelected from './MenuItemSelected';
import SVGLogout from '../../components/SVGLogout';
import SVGProfile from '../../components/SVGProfile';
import messages from './messages';

import { PROFILE_SECTIONS } from './constants';
import { ROUTES } from '../../constants';

const Dashboard = (props) => {

  const {
    currentRow,
    isMobile,
    onSectionTouched,
    router,
    style,
    updateUserProfile,
  } = props;

  const styles = {
    rowLabel: {
      position: 'absolute',
      top: '0',
      right: '0',
      fontFamily: 'Helvetica Neue',
      fontWeight: '400'
    },
    rowIcon: { height: 36, width: 36 },
    rowIconColor: { active: 'white', inactive: '#9B9B9B' },
    rowLabelColor: { active: {color: 'white'}, inactive: {color: 'black'}
    },
  };

  const currentSection = {
    about_me: (currentRow === PROFILE_SECTIONS.about_me),
    account: (currentRow === PROFILE_SECTIONS.account),
    contact_info: (currentRow === PROFILE_SECTIONS.contact_info),
    exit: (currentRow === PROFILE_SECTIONS.exit),
  };

  return (
    <div style={style}>
      <MenuItem onClick={() => onSectionTouched(PROFILE_SECTIONS.about_me)} >
        <div style={currentSection.about_me ? styles.rowLabelColor.active : styles.rowLabelColor.inactive}>
          {
            currentSection.about_me ? (
              <MenuItemSelected isMobile={isMobile}/>
            ) : null
          }
          <MenuItemWrapper isMobile={isMobile} >
            <SVGProfile height={styles.rowIcon.height} width={styles.rowIcon.width} color={ currentSection.about_me ? styles.rowIconColor.active : styles.rowIconColor.inactive} />
            <FormattedMessage {...messages.aboutMeLabel} >
              {
                (formattedMSG) => (<div style={styles.rowLabel}>{formattedMSG}</div>)
              }
            </FormattedMessage>
          </ MenuItemWrapper>
        </div>
      </MenuItem>
      <MenuItem onClick={() => onSectionTouched(PROFILE_SECTIONS.account)}>
        <div style={currentSection.account ? styles.rowLabelColor.active : styles.rowLabelColor.inactive}>
          {
            currentSection.account ? (
              <MenuItemSelected isMobile={isMobile} />
            ) : null
          }
          <MenuItemWrapper isMobile={isMobile}>
            <SVGSettings style={{ height: styles.rowIcon.height, width: styles.rowIcon.width }} color={currentSection.account ? styles.rowIconColor.active : styles.rowIconColor.inactive} />
            <FormattedMessage {...messages.accountLabel} >
              {
                (formattedMSG) => (<div style={styles.rowLabel}>{formattedMSG}</div>)
              }
            </FormattedMessage>
          </MenuItemWrapper>
        </div>
      </MenuItem>
      <MenuItem
        onClick={() => {
          // Once he leaves the profile page,
          // trigger a saga to save the data
          updateUserProfile();
          router.push(ROUTES.HOME);
        }}
      >
        <div style={currentSection.exit ? styles.rowLabelColor.active : styles.rowLabelColor.inactive}>
          {
            currentSection.exit ? (
              <MenuItemSelected isMobile={isMobile} />
            ) : null
          }
          <MenuItemWrapper isMobile={isMobile}>
            <SVGLogout style={{ height: styles.rowIcon.height, width: styles.rowIcon.width, marginLeft: '6px' }} color={currentSection.exit ? styles.rowIconColor.active : styles.rowIconColor.inactive} />
            <FormattedMessage {...messages.exitLabel} >
              {
                (formattedMSG) => (<div style={styles.rowLabel}>{formattedMSG}</div>)
              }
            </FormattedMessage>
          </MenuItemWrapper>
        </div>
      </MenuItem>
    </div>
  );
};

Dashboard.propTypes = {
  ...Dashboard.propTypes,
  currentRow: PropTypes.number.isRequired,
  style: PropTypes.object,
  isMobile: PropTypes.bool,
  onSectionTouched: PropTypes.func.isRequired,
  updateUserProfile: PropTypes.func,
};

export default withRouter(Dashboard);
