/**
 * Created by gaby on 7/26/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import Body from './Body';
import CloseButton from './CloseButton';
import CenterDiv from './CenterDiv';
import Wrapper from './Wrapper';

class Modal extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.onDismiss()
  }

  render() {
    const { children, open = true } = this.props;

    if (!open) {
      return null;
    }

    return (
      <Wrapper>
        <Body>
          <CenterDiv>
            <CloseButton onClick={this.closeModal}>x</CloseButton>
            { React.Children.toArray(children) }
          </CenterDiv>
        </Body>
      </Wrapper>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  onDismiss: PropTypes.func,
};

export default Modal;
