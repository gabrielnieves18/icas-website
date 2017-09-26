/**
 * Created by gaby on 7/5/17.
 */
import styled from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const Div = styled.div`
  @media all {
    border: dashed 2px #4A4A4A;
    color: #4A4A4A;
    font-size: 24px;
    font-weight: 400;
    height: 250px;
    margin: 0;
    width: 400px;
    visibility: visible;
    outline: none;

    &:hover {
      cursor: pointer;
      transform: scale(1.0, 1.0);
    }

    &:active {
      transform: scale(0.95, 0.95);
    }
  }

  @media (min-width: 320px) {
    height: 200px;
    width: 95%;
  }
  
  @media (min-width: 700px) {
    height: 250px;
    width: 400px;
  }
`;

export default Div;
