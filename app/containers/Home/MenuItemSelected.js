/**
 * Created by gaby on 7/5/17.
 */
import styled from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const Wrapper = styled.div`
  @media all {
    background: rgb(176, 95, 109);
    position: absolute;
    height: 48px;
    top: 0;
    left: ${ (props) => (props.isMobile ? '51px' : '0') };
    width: 80%;
  }
`;

export default Wrapper;
