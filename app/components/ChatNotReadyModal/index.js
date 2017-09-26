/**
 * Created by gaby on 7/26/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import CenterDiv from './CenterDiv';
import H1 from './H1';
import Modal from '../Modal';
import messages from './messages';
import SVGConstructionBarrier from '../../components/SVGConstructionBarrier';
import SVGConstructionCone from '../../components/SVGConstructionCone';

class ChatNotReadyModal extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { open = true, onDismiss } = this.props;

    const SVGCone = () => <SVGConstructionCone height={44} width={44} style={{ margin: 'auto 0 0 0' }}/>;

    return (
      <Modal open={open} onDismiss={onDismiss} >
        <FormattedMessage {...messages.titleLabel}>
          { (formattedTitle) => <H1>{formattedTitle}</H1> }
        </FormattedMessage>
        <CenterDiv>
          <SVGCone />
          <SVGConstructionBarrier />
          <SVGCone />
        </CenterDiv>
        <div style={{ flexGrow: '1', margin: '0 0 16px 0' }}>
          <FormattedMessage {...messages.messageLabel} />
        </div>
      </Modal>
    );
  }
}

ChatNotReadyModal.propTypes = {
  open: PropTypes.bool,
  onDismiss: PropTypes.func,
};

export default ChatNotReadyModal;
