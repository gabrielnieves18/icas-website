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

const Fundamentals = (props) => {

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
    language: (currentRow === EDITOR_SECTIONS.language),
    category: (currentRow === EDITOR_SECTIONS.category),
  };

  const checkmark = () => (
    <SVGCheckmarkBorder
      height={styles.rowIcon.height}
      style={styles.rowIcon.style}
      width={styles.rowIcon.width} />
  );

  return (
    <div style={style}>
      <MenuItem onClick={() => onSectionTouched(EDITOR_SECTIONS.language)} >
        <MenuItemWrapper isMobile={isMobile} isActive={currentSection.language}>
          <FormattedMessage {...messages.aboutMeLabel} >
            {
              (formattedMSG) => (<div style={styles.rowLabel}>Language</div>)
            }
          </FormattedMessage>
          {
            completedRows.get(EDITOR_SECTIONS_NAME.language) && checkmark()
          }
        </ MenuItemWrapper>
      </MenuItem>

      <MenuItem onClick={() => onSectionTouched(EDITOR_SECTIONS.category)}>
        <MenuItemWrapper isMobile={isMobile} isActive={currentSection.category}>
          <FormattedMessage {...messages.contactInfoLabel} >
            {
              (formattedMSG) => (<div style={styles.rowLabel}>Category</div>)
            }
          </FormattedMessage>
          {
            completedRows.get(EDITOR_SECTIONS_NAME.category) && checkmark()
          }
        </MenuItemWrapper>
      </MenuItem>
    </div>
  );
};

Fundamentals.propTypes = {
  ...Fundamentals.propTypes,
  completedRows: PropTypes.object.isRequired,
  currentRow: PropTypes.number.isRequired,
  style: PropTypes.object,
  isMobile: PropTypes.bool,
  onSectionTouched: PropTypes.func.isRequired,
};

export default Fundamentals;
