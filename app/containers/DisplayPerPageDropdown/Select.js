/**
 * Created by gaby on 7/3/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

class Select extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    name: PropTypes.string,
    onChange: PropTypes.func,
  };

  render() {
    const { className, onChange, name = '' } = this.props;
    return (
      <select className={className} name={name} onChange={onChange} >
        {React.Children.toArray(this.props.children)}
      </select>
    );
  }
}

/* eslint-disable no-tabs */
// language=SCSS
const DropDown = styled(Select)`
  @media all {
  }

  @media (min-width: 320px) {
  }

  @media (min-width: 360px) {
  }

  @media (min-width: 640px) {
  }

  @media (min-width: 1024px) {
  }
`;

export default DropDown;
