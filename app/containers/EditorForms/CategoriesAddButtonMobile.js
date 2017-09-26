/**
 * Created by gaby on 7/5/17.
 */
import styled from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const Div = styled.button`
  @media all {
    color: #F5A623;
    margin: 0;
    outline: none;
    visibility: visible;

    &:hover {
      cursor: pointer;
      transform: scale(1.0, 1.0);
    }

    &:active {
      transform: scale(0.95, 0.95);
    }
  }
`;

export default Div;
