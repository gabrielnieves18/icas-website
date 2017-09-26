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

const PKGDetails = (props) => {

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
    date: (currentRow === EDITOR_SECTIONS.date),
    description: (currentRow === EDITOR_SECTIONS.description),
    images: (currentRow === EDITOR_SECTIONS.images),
    oneLiner: (currentRow === EDITOR_SECTIONS.oneLiner),
    price: (currentRow === EDITOR_SECTIONS.price),
    rendezvous: (currentRow === EDITOR_SECTIONS.rendezvous),
    title: (currentRow === EDITOR_SECTIONS.title),
  };

  const checkmark = () => (
    <SVGCheckmarkBorder
      height={styles.rowIcon.height}
      style={styles.rowIcon.style}
      width={styles.rowIcon.width} />
  );

  return (
    <div style={style}>
      <MenuItem onClick={() => onSectionTouched(EDITOR_SECTIONS.title)} >
        <MenuItemWrapper isMobile={isMobile} isActive={currentSection.title}>
          <FormattedMessage {...messages.aboutMeLabel} >
            {
              (formattedMSG) => (<div style={styles.rowLabel}>Title</div>)
            }
          </FormattedMessage>
          {
            completedRows.get(EDITOR_SECTIONS_NAME.title) && checkmark()
          }
        </ MenuItemWrapper>
      </MenuItem>

      <MenuItem onClick={() => onSectionTouched(EDITOR_SECTIONS.date)}>
        <MenuItemWrapper isMobile={isMobile} isActive={currentSection.date}>
          <FormattedMessage {...messages.contactInfoLabel} >
            {
              (formattedMSG) => (<div style={styles.rowLabel}>Date</div>)
            }
          </FormattedMessage>
          {
            completedRows.get(EDITOR_SECTIONS_NAME.date) && checkmark()
          }
        </MenuItemWrapper>
      </MenuItem>

      <MenuItem onClick={() => onSectionTouched(EDITOR_SECTIONS.oneLiner)}>
        <MenuItemWrapper isMobile={isMobile} isActive={currentSection.oneLiner}>
          <FormattedMessage {...messages.contactInfoLabel} >
            {
              (formattedMSG) => (<div style={styles.rowLabel}>One Liner</div>)
            }
          </FormattedMessage>
          {
            completedRows.get(EDITOR_SECTIONS_NAME.oneLiner) && checkmark()
          }
        </MenuItemWrapper>
      </MenuItem>

      <MenuItem onClick={() => onSectionTouched(EDITOR_SECTIONS.price)}>
        <MenuItemWrapper isMobile={isMobile} isActive={currentSection.price}>
          <FormattedMessage {...messages.contactInfoLabel} >
            {
              (formattedMSG) => (<div style={styles.rowLabel}>Price</div>)
            }
          </FormattedMessage>
          {
            completedRows.get(EDITOR_SECTIONS_NAME.price) && checkmark()
          }
        </MenuItemWrapper>
      </MenuItem>

      <MenuItem onClick={() => onSectionTouched(EDITOR_SECTIONS.description)}>
        <MenuItemWrapper isMobile={isMobile} isActive={currentSection.description}>
          <FormattedMessage {...messages.contactInfoLabel} >
            {
              (formattedMSG) => (<div style={styles.rowLabel}>Description</div>)
            }
          </FormattedMessage>
          {
            completedRows.get(EDITOR_SECTIONS_NAME.description) && checkmark()
          }
        </MenuItemWrapper>
      </MenuItem>

      <MenuItem onClick={() => onSectionTouched(EDITOR_SECTIONS.images)}>
        <MenuItemWrapper isMobile={isMobile} isActive={currentSection.images}>
          <FormattedMessage {...messages.contactInfoLabel} >
            {
              (formattedMSG) => (<div style={styles.rowLabel}>Images</div>)
            }
          </FormattedMessage>
          {
            completedRows.get(EDITOR_SECTIONS_NAME.images) && checkmark()
          }
        </MenuItemWrapper>
      </MenuItem>

      <MenuItem onClick={() => onSectionTouched(EDITOR_SECTIONS.rendezvous)}>
        <MenuItemWrapper isMobile={isMobile} isActive={currentSection.rendezvous}>
          <FormattedMessage {...messages.contactInfoLabel} >
            {
              (formattedMSG) => (<div style={styles.rowLabel}>Rendezvous</div>)
            }
          </FormattedMessage>
          {
            completedRows.get(EDITOR_SECTIONS_NAME.rendezvous) && checkmark()
          }
        </MenuItemWrapper>
      </MenuItem>
    </div>
  );
};

PKGDetails.propTypes = {
  ...PKGDetails.propTypes,
  completedRows: PropTypes.object.isRequired,
  currentRow: PropTypes.number.isRequired,
  style: PropTypes.object,
  isMobile: PropTypes.bool,
  onSectionTouched: PropTypes.func.isRequired,
};

export default PKGDetails;
