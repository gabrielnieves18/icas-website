/**
 * Created by gaby on 7/5/17.
 */
import styled, { injectGlobal } from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const Body = styled.div`
  @media all {
    //background: white;
    //border: 1px solid rgb(210, 210, 210);
    border: none !important;
    height: 100%;
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 24px;
    margin: 0 64px;
  }

  @media (min-width: 320px) {
    justify-content: center;
    margin: 0;
  }

  @media (min-width: 360px) {
  }

  @media (min-width: 412px) {
  }

  @media (min-width: 640px) {
    justify-content: flex-start;
    margin: 0 64px;
  }

  @media (min-width: 1024px) {
  }
`;

// ${(props) => props.style.height};

export default Body;
