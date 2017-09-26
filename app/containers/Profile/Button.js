/**
 * Created by gaby on 6/22/17.
 */
import styled from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const ActiveSpan = styled.button`
  @media all {
    border-radius: 7px;
    color: black;
    font-family: Helvetica, "Helvetica Neue", sans-serif;
    font-weight: 500;
    height: 64px;
    margin: 24px 64px;
    select: none;
    transform: scale(1.0);

    &:hover {
      color: rgba(155,155,155, 0.90);
      cursor: pointer;
    }

    &:focus {
      outline: none;
      transform: scale(1.0);
    }

    &:active {
      transform: scale(0.95);
    }
    
    &:disabled {
      background-color: gray;
      border-color: gray;
      color: darkgray;
      cursor: not-allowed;
    }
  }

  @media (min-width: 320px) {
    margin: 0;
  }
  
  @media (min-width: 640px) {
    margin: 0 64px;
  }
`;

export default ActiveSpan;
