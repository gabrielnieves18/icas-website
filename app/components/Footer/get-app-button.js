/* eslint-disable no-tabs */
/**
 * Created by gaby on 5/5/17.
 */
import styled from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const GetAppButton = styled.a` 
  @media all { 
    background: none;
    border-radius: 24px;
    border: thin solid gray;
    
    font-size: 1em;
    
    padding: 0.4em 0.8em;
    position: relative;
    
    top: -7px;
    
    user-select: none;
  }
  
  &:focus {
    text-decoration: none;
  }
  
  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
  
  &:active {
    background: greenyellow;
    color: white;
  }
`;

export default GetAppButton;
