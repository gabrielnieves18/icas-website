/**
 * Created by gaby on 7/5/17.
 */
import styled, { injectGlobal } from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const Wrapper = styled.div`
  @media all {
    width: 100%;
    padding: 64px 16% 24px;
    flex-grow: 1;
  }

  @media (min-width: 320px) {
    width: 100%;
    padding: 32px 0 ;
    flex-grow: 1;
  }

  @media (min-width: 360px) {
  }

  @media (min-width: 412px) {
  }

  @media (min-width: 640px) {
    width: 100%;
    padding: 64px 16% 32px;
    flex-grow: 1;
  }

  @media (min-width: 1024px) {
  }
`;

export default Wrapper;
