/**
 * Created by gaby on 7/5/17.
 */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import AlmostDone from './AlmostDone';
import DrawerHeader from './DrawerHeader';
import DrawerHead from './DrawerHead';
import Fundamentals from './Fundamentals';
import LocaleToggle from '../LocaleToggle';
import PKGDetails from './PKGDetails';
import messages from './messages';

import { EDITOR_SECTIONS } from './constants';

const EditorDrawer = (props) => {
  const {
    completedRows,
    currentRow,
    isMobile,
    open,
    style,
    setOpen,
    smallScreen,
    updateCurrentSection,
  } = props;

  const styles = {
    header: {
      default: {color: '#c0c0c0'},
      selected: {color: 'white'},
    },
    localeToggle: {
      bottom: '0',
      padding: '10px 24px 10px 8px',
      //position: `${smallScreen ? 'relative' : 'absolute' }`,
      position: 'relative',
      width: '100%',
    },
    section: { marginBottom: '15%' },
  };

  const currentSection = {
    fundamentals: (currentRow < EDITOR_SECTIONS.title),
    pkgDetails: (currentRow > EDITOR_SECTIONS.category && currentRow < EDITOR_SECTIONS.requirements),
    almostDone: (currentRow > EDITOR_SECTIONS.rendezvous),
  };

  const checkmark = () => (
    <SVGCheckmarkBorder
      height={styles.rowIcon.height}
      style={styles.rowIcon.style}
      width={styles.rowIcon.width} />
  );

  return (
    <Drawer
      docked={!isMobile}
      open={open || !isMobile}
      openSecondary={isMobile}
      onRequestChange={(open) => setOpen({open})}
      containerStyle={{ backgroundImage: 'linear-gradient(141deg, rgb(245, 81, 95) 22%, rgb(217, 56, 73) 70%, rgb(209, 49, 67) 87%, rgb(203, 44, 63) 90%, rgb(191, 33, 53) 95%)' }}
    >
      <DrawerHead/>

      <FormattedMessage {...messages.dashboardLabel} >
        {
          (formattedMSG) => (
            <DrawerHeader
              headerLabel="FUNDAMENTALS"
              style={currentSection.fundamentals ? styles.header.selected : styles.header.default}
            />
          )
        }
      </FormattedMessage>
      <Fundamentals
        completedRows={completedRows}
        currentRow={currentRow}
        style={styles.section}
        isMobile={isMobile}
        onSectionTouched={updateCurrentSection}
      />

      <FormattedMessage {...messages.dashboardLabel} >
        {
          (formattedMSG) => (
            <DrawerHeader
              headerLabel="PACKAGE DETAILS"
              style={currentSection.pkgDetails ? styles.header.selected : styles.header.default}
            />
          )
        }
      </FormattedMessage>
      <PKGDetails
        completedRows={completedRows}
        currentRow={currentRow}
        style={styles.section}
        isMobile={isMobile}
        onSectionTouched={updateCurrentSection}
      />

      <FormattedMessage {...messages.dashboardLabel} >
        {
          (formattedMSG) => (
            <DrawerHeader
              headerLabel="ALMOST DONE !"
              style={currentSection.almostDone ? styles.header.selected : styles.header.default}
            />
          )
        }
      </FormattedMessage>
      <AlmostDone
        completedRows={completedRows}
        currentRow={currentRow}
        style={styles.section}
        isMobile={isMobile}
        onSectionTouched={updateCurrentSection}
      />
      <div style={styles.localeToggle}>
        <LocaleToggle />
      </div>
    </Drawer>
  );
};

EditorDrawer.propTypes = {
  completedRows: PropTypes.object.isRequired,
  currentRow: PropTypes.number.isRequired,
  isMobile: PropTypes.bool,
  open: PropTypes.bool,
  style: PropTypes.object,
  setOpen: PropTypes.func.isRequired,
  smallScreen: PropTypes.bool,
  updateAvatar: PropTypes.func,
  updateCurrentSection: PropTypes.func.isRequired,
};

export default EditorDrawer;
