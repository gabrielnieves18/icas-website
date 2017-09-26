/**
 * Created by gaby on 6/22/17.
 */
import styled from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const ActiveSpan = styled.button`
  @media all {
    background: #34D08C;
    border: 1px solid rgba(80, 227, 194, 0.53);
    border-radius: 7px;
    color: white;
    font-family: Helvetica, "Helvetica Neue", sans-serif;
    font-weight: 500;
    height: 64px;
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
      background-color: gray;
      border-color: gray;
      color: darkgray;
      cursor: not-allowed;
    }
  }

  @media (min-width: 320px) {
    width: 80%;
  }

  @media (min-width: 640px) {
    width: 65%;
  }
`;

export default ActiveSpan;
