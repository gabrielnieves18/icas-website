/**
 * Created by gaby on 6/22/17.
 */
import styled from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const ActiveSpan = styled.button`
  @media all {
    background: none;
    color: black;
    font-size: 12px;
    font-family: Helvetica, "Helvetica Neue", sans-serif;
    font-weight: 500;
    letter-spacing: 1.4px;
    margin: 1px;
    select: none;
    padding: 16px;
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
      color: darkgray;
      cursor: not-allowed;
    }
  }
`;

export default ActiveSpan;
