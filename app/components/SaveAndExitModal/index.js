/**
 * Created by gaby on 7/26/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router';

import Body from './Body'
import CenterDiv from './CenterDiv';
import H1 from './H1';
import Modal from '../Modal';
import messages from './messages';
import ButtonSubmit from './ButtonSubmit';

import { ROUTES } from '../../constants';

const SaveAndExitModal = (props) => {
  const {
    open = true,
    onDismiss,
    router
  } = props;

  return (
    <Modal open={open} onDismiss={onDismiss} >
      <Body>
        <FormattedMessage {...messages.titleLabel}>
          { (formattedTitle) => <H1>{formattedTitle}</H1> }
        </FormattedMessage>
        <CenterDiv>
          <ButtonSubmit onClick={onDismiss}>
            Continue Editing
          </ButtonSubmit>
          <ButtonSubmit onClick={() => {
            onDismiss();
            router.push(ROUTES.HOME);
          }}>
            Go back to Home
          </ButtonSubmit>
        </CenterDiv>
        <div style={{ flexGrow: '1', margin: '0 0 16px 0' }}>
          <FormattedMessage {...messages.messageLabel} />
        </div>
      </Body>
    </Modal>
  );
};

SaveAndExitModal.propTypes = {
  open: PropTypes.bool,
  onDismiss: PropTypes.func,
  router: PropTypes.object,
};

export default withRouter(SaveAndExitModal);
