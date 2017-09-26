/**
 * Created by gaby on 7/5/17.
 */
import styled from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const Div = styled.img`
  @media all {
    background-clip: padding-box;
    border: none;
    flex-grow: 1;
    width: 100%;
  }

  @media (min-width: 320px) {
    width: 100%;
  }
  
  @media (min-width: 700px) {
    width: 396px;
  }
`;

export default Div;
