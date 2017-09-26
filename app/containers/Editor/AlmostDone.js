/**
 * Created by gaby on 7/5/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';

import { FormattedMessage } from 'react-intl';

import MenuItemWrapper from './MenuItemWrapper';
import SVGCheckmarkBorder from '../../components/SVGCheckmarkBorder';
import messages from './messages';

import {
  EDITOR_SECTIONS,
  EDITOR_SECTIONS_NAME,
} from './constants';

const AlmostDone = (props) => {

  const {
    completedRows,
    currentRow,
    isMobile,
    onSectionTouched,
    style,
  } = props;

  const styles = {
    rowLabel: {
      position: 'absolute',
      left: '0',
      fontFamily: 'Helvetica Neue',
      fontWeight: '400'
    },
    rowIcon: {
      height: 16,
      style: {
        position: 'absolute',
        right: '0',
        top: '15px',
      },
      width: 16
    },
    rowIconColor: { active: 'white', inactive: '#9B9B9B' },
    rowLabelColor: { active: {color: 'white'}, inactive: {color: 'black'}
    },
  };

  const currentSection = {
    requirements: (currentRow === EDITOR_SECTIONS.requirements),
    groupSize: (currentRow === EDITOR_SECTIONS.groupSize),
    packingList: (currentRow === EDITOR_SECTIONS.packingList),
    reviewAndSubmit: (currentRow === EDITOR_SECTIONS.reviewAndSubmit),
  };

  const checkmark = () => (
    <SVGCheckmarkBorder
      height={styles.rowIcon.height}
      style={styles.rowIcon.style}
      width={styles.rowIcon.width} />
  );

  return (
    <div style={style}>
      <MenuItem onClick={() => onSectionTouched(EDITOR_SECTIONS.requirements)} >
        <MenuItemWrapper isMobile={isMobile} isActive={currentSection.requirements}>
          <FormattedMessage {...messages.aboutMeLabel} >
            {
              (formattedMSG) => (<div style={styles.rowLabel}>Requirements</div>)
            }
          </FormattedMessage>
          {
            completedRows.get(EDITOR_SECTIONS_NAME.requirements) && checkmark()
          }
        </ MenuItemWrapper>
      </MenuItem>

      <MenuItem onClick={() => onSectionTouched(EDITOR_SECTIONS.groupSize)}>
        <MenuItemWrapper isMobile={isMobile} isActive={currentSection.groupSize}>
          <FormattedMessage {...messages.contactInfoLabel} >
            {
              (formattedMSG) => (<div style={styles.rowLabel}>Group Size</div>)
            }
          </FormattedMessage>
          {
            completedRows.get(EDITOR_SECTIONS_NAME.groupSize) && checkmark()
          }
        </MenuItemWrapper>
      </MenuItem>

      <MenuItem onClick={() => onSectionTouched(EDITOR_SECTIONS.packingList)}>
        <MenuItemWrapper isMobile={isMobile} isActive={currentSection.packingList}>
          <FormattedMessage {...messages.contactInfoLabel} >
            {
              (formattedMSG) => (<div style={styles.rowLabel}>Packing List</div>)
            }
          </FormattedMessage>
          {
            completedRows.get(EDITOR_SECTIONS_NAME.packingList) && checkmark()
          }
        </MenuItemWrapper>
      </MenuItem>

      <MenuItem onClick={() => onSectionTouched(EDITOR_SECTIONS.reviewAndSubmit)}>
        <MenuItemWrapper isMobile={isMobile} isActive={currentSection.reviewAndSubmit}>
          <FormattedMessage {...messages.contactInfoLabel} >
            {
              (formattedMSG) => (<div style={styles.rowLabel}>Review &amp; Submit</div>)
            }
          </FormattedMessage>
          {
            completedRows.get(EDITOR_SECTIONS_NAME.reviewAndSubmit) && checkmark()
          }
        </MenuItemWrapper>
      </MenuItem>
    </div>
  );
};

AlmostDone.propTypes = {
  ...AlmostDone.propTypes,
  completedRows: PropTypes.object.isRequired,
  currentRow: PropTypes.number.isRequired,
  style: PropTypes.object,
  isMobile: PropTypes.bool,
  onSectionTouched: PropTypes.func.isRequired,
};

export default AlmostDone;
