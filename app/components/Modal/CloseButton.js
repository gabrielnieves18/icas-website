/**
 * Created by gaby on 7/23/17.
 */
import styled from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const Button = styled.button`
  /* Adapt the colours based on primary prop */
  @media all {
    background: none;
    border: none;
    color: #334;
    font-size: 18px;
    font-weight: 400;
    font-family: "Arial Rounded MT Bold", Arial, sans-serif;
    outline: none;
    float: right;
    
    &:hover {
      cursor: pointer;
      transform: scale(1.15, 1.15);
    }
    
    &:active {
      transform: scale(1.0, 1.0);
    }
  }
`;

export default Button;
