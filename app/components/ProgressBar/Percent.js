import styled from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
export default styled.div`
  @media all {
    background: #29D;
    height: 4px;
    position: absolute;
    transition: all 300ms ease;
    top: 0;
    left: 0;
  }

  @media (min-width: 320px) {
    top: 64px;
  }
  
  @media (min-width: 640px) {
    top: 0;
  }
  
`;
