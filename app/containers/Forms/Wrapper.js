/**
 * Created by gaby on 7/5/17.
 */
import styled, { injectGlobal } from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const Wrapper = styled.div`
  @media all {
    display: flex;
    height: 100%;
    width: 100%;
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
