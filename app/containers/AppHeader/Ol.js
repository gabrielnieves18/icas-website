/**
 * Created by gaby on 6/30/17.
 */

import styled from 'styled-components';

import { SPOTIN_GREEN_LIGHT } from '../../constants';

/* eslint-disable no-tabs */
// language=SCSS
const Wrapper = styled.ol`
  @media all {
    counter-reset: steps;
    height: 36px;
    width: 100%;
    background-color: ${SPOTIN_GREEN_LIGHT};
    display: flex;
    justify-content: center;
    list-style-type: decimal;
  }

  @media (min-width: 320px) {
    padding-left: 0;
  }

  @media (min-width: 360px) {
  }

  @media (min-width: 640px) {
    justify-content: center;
    padding-left: 0;
  }

  @media (min-width: 1024px) {
  }
`;

export default Wrapper;
