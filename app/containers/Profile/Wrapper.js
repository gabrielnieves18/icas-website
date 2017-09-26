/**
 * Created by gaby on 7/5/17.
 */
import styled, { injectGlobal } from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const Wrapper = styled.div`
  @media all {
    height: 100%;
    width: 100%;
  }

  @media (min-width: 320px) {
  }

  @media (min-width: 360px) {
  }

  @media (min-width: 412px) {
  }

  @media (min-width: 640px) {
  }

  @media (min-width: 1024px) {
  }
`;

/* eslint no-unused-expressions: 0 */
// language=SCSS
injectGlobal`
  #app {
    background-image: none;
    background: #FAFAFA;
  }
`;

export default Wrapper;
