/**
 * Created by gaby on 7/5/17.
 */
import styled, { injectGlobal } from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const Wrapper = styled.div`
  @media all {
    background-color: rgb(250, 250, 250);
    background-clip: padding-box;
    border: thin solid rgba(150, 150, 150, 0.4);
    border-radius: 60px;
    flex-grow: 1;
    padding-left: 41px;
    padding-top: 41px;
    margin-bottom: 64px;
    height: 120px;
    width: 120px;
  }
`;

export default Wrapper;
