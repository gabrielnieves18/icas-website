/**
 * Created by gaby on 7/23/17.
 */
import styled from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const Button = styled.button`
  /* Adapt the colours based on primary prop */
  @media all {
    background: ${(props) => props.primary ? '#eabe00' : 'white'};
    color: ${(props) => props.primary ? 'white' : '#eabe00'};
  
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #eabe00;
    border-radius: 3px;
    
    &:hover {
      cursor: pointer;
      transform: scale(1.15, 1.15);
    }
    
    &:active {
      transform: scale(1.0, 1.0);
    }
    
    &:focus {
      background-image: none;
      box-shadow: none;
      outline: 0;
    }
  }
`;

export default Button;
