/**
 * Created by gaby on 6/22/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = (props) => {
  const { children, style = {}, onClick } = props;

  /* eslint-disable no-tabs */
  // language=SCSS
  const Wrapper = styled.button`
    @media all {
      padding: ${style.padding} ;
      
      &:focus {
        outline: none;
      }
      
      &:hover {
        cursor: pointer;
      }
    }
  `;

  return (
    <Wrapper style={style} onClick={onClick} >
      {React.Children.toArray(children)}
    </Wrapper>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default Button;
