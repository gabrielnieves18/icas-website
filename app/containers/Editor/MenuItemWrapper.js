/**
 * Created by gaby on 7/5/17.
 */
import styled, { injectGlobal } from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const Wrapper = styled.div`
  @media all {
    background: none;
    color: ${(props) => (props.isActive? 'white' : '#c0c0c0')};
    position: absolute;
    top: 0;
    left: ${ (props) => (props.isMobile ? '58px' : '14px') };
    width: 70%;
  }
`;

export default Wrapper;
