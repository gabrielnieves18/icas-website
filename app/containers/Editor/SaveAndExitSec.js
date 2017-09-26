/**
 * Created by gaby on 6/22/17.
 */
import styled from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const SectionDiv = styled.section`
  @media all {
    position: absolute; 
    top: 0; 
    right: 0;
  }

  @media (min-width: 320px) {
    top: 64px; 
  }
  
  @media (min-width: 640px) {
    top: 0;
  }
`;

export default SectionDiv;
