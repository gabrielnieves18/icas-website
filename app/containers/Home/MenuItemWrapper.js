/**
 * Created by gaby on 7/5/17.
 */
import styled, { injectGlobal } from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const Wrapper = styled.div`
  @media all {
    background: none;
    position: absolute;
    height: 48px;
    top: 0;
    left: ${ (props) => (props.isMobile ? '61px' : '14px') };
    width: 70%;
  }
`;

export default Wrapper;
