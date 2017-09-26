/**
 * Created by gaby on 7/5/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';

import { FormattedMessage } from 'react-intl';

import MenuItemWrapper from './MenuItemWrapper';
import MenuItemSelected from './MenuItemSelected';
import SVGCalendar from '../../components/SVGCalendar';
import SVGHome from '../../components/SVGHome';
import SVGPushPin from '../../components/SVGPushPin';
import messages from './messages';

import { HOME_SECTIONS } from './constants';

const Dashboard = ({ currentRow, isMobile, style, onSectionTouched }) => {

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
    home: (currentRow === HOME_SECTIONS.home),
    ongoing: (currentRow === HOME_SECTIONS.ongoing),
    uncompleted: (currentRow === HOME_SECTIONS.uncompleted)
  };

  return (
    <div style={style}>
      <MenuItem onClick={() => onSectionTouched(HOME_SECTIONS.home)} >
        <div style={currentSection.home ? styles.rowLabelColor.active : styles.rowLabelColor.inactive}>
          {
            currentSection.home ? (
              <MenuItemSelected isMobile={isMobile}/>
            ) : null
          }
          <MenuItemWrapper isMobile={isMobile} >
            <SVGHome height={styles.rowIcon.height} width={styles.rowIcon.width} color={ currentSection.home ? styles.rowIconColor.active : styles.rowIconColor.inactive} />
            <FormattedMessage {...messages.homeLabel} >
              {
                (formattedMSG) => (<div style={styles.rowLabel}>{formattedMSG}</div>)
              }
            </FormattedMessage>
          </ MenuItemWrapper>
        </div>
      </MenuItem>
      <MenuItem onClick={() => onSectionTouched(HOME_SECTIONS.ongoing)}>
        <div style={currentSection.ongoing ? styles.rowLabelColor.active : styles.rowLabelColor.inactive}>
          {
            currentSection.ongoing ? (
              <MenuItemSelected isMobile={isMobile}/>
            ) : null
          }
          <MenuItemWrapper isMobile={isMobile}>
            <SVGCalendar height={styles.rowIcon.height + 2} width={styles.rowIcon.height + 2} color={currentSection.ongoing ? styles.rowIconColor.active : styles.rowIconColor.inactive} style={{marginLeft: '3px'}} />
            <FormattedMessage {...messages.ongoingLabel} >
              {
                (formattedMSG) => (<div style={styles.rowLabel}>{formattedMSG}</div>)
              }
            </FormattedMessage>
          </MenuItemWrapper>
        </div>
      </MenuItem>
      <MenuItem onClick={() => onSectionTouched(HOME_SECTIONS.uncompleted)}>
        <div style={currentSection.uncompleted ? styles.rowLabelColor.active : styles.rowLabelColor.inactive}>
          {
            currentSection.uncompleted ? (
              <MenuItemSelected isMobile={isMobile}/>
            ) : null
          }
          <MenuItemWrapper isMobile={isMobile} >
            <SVGPushPin height={styles.rowIcon.height} width={styles.rowIcon.height} color={currentSection.uncompleted ? styles.rowIconColor.active : styles.rowIconColor.inactive} style={{ transform: "rotate(45deg)" }} />
            <FormattedMessage {...messages.uncompletedLabel} >
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
  currentRow: PropTypes.number.isRequired,
  style: PropTypes.object,
  isMobile: PropTypes.bool,
  onSectionTouched: PropTypes.func.isRequired,
};

export default Dashboard;
