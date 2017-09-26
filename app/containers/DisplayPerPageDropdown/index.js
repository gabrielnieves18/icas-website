/**
 * Created by gaby on 7/15/17.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Select from './Select';

import { updatePerPageQuantity } from './actions';

class DisplayPerPageDropdown extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { updatePageQuantity } = this.props;

    return (
      <Select onChange={updatePageQuantity} >
        <option value={10}>Per page 10</option>
        <option value={15}>Per page 15</option>
        <option value={20}>Per page 20</option>
        <option value={25}>Per page 25</option>
        <option value={30}>Per page 30</option>
      </Select>
    );
  }
}

DisplayPerPageDropdown.propTypes = {
  updatePageQuantity: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    updatePageQuantity: (evt) => {
      const intValue = Number(evt.target.value);
      dispatch(updatePerPageQuantity(intValue));
    },
  };
}

export default connect(null, mapDispatchToProps)(DisplayPerPageDropdown);
