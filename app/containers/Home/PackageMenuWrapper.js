/**
 * Created by gaby on 7/5/17.
 */
import styled, { injectGlobal } from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const Body = styled.div`
  @media all {
    background: white;
    border: 1px solid rgb(210, 210, 210);
    height: 260px;
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    justify-content: center;
    padding: 8px 0;
    margin: 32px 28%;
  }

  @media (min-width: 320px) {
    margin: 16px 0;
  }

  @media (min-width: 360px) {
  }

  @media (min-width: 412px) {
  }

  @media (min-width: 640px) {
  }

  @media (min-width: 1024px) {
    margin: 32px 28%;
  }

  @media (min-width: 1448px) {
    margin: 32px 35%;
  }
`;

// ${(props) => props.style.height};

export default Body;
