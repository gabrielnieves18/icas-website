/**
 * Created by gaby on 8/20/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import DropDownMenu from 'material-ui/DropDownMenu';

import ChevronDown from '../../components/ChevronDown';

const DropDownButton = (props) => {

  const {
    backgroundColor = "#fafafa",
    borderColor = "green",
    children,
    labelColor = "black",
    labelFont = "Roboto",
    onChange,
    value,
  } = props;

  const styles = {
    style: {
      backgroundColor,
      fontFamily: labelFont,
      height: "58px",
      width: "100%",
      border: 'thin solid #9B9B9B',
      marginBottom: "6px",
    },
    labelStyle: {
      color: labelColor,
    },
    underlineStyle: {
      visibility: 'hidden',
    },
  };

  return (
    <DropDownMenu
      iconButton={<ChevronDown width={24} height={24} color="#000000" />}
      autoWidth={false}
      maxHeight={300}
      style={styles.style}
      labelStyle={styles.labelStyle}
      onChange={onChange}
      underlineStyle={styles.underlineStyle}
      value={value}
    >
      {React.Children.toArray(children)}
    </DropDownMenu>
  );
};

DropDownButton.propTypes = {
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  children: PropTypes.node,
  labelColor: PropTypes.string,
  labelFont: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any.isRequired,
};

export default DropDownButton;