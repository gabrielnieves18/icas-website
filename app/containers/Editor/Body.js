/**
 * Created by gaby on 7/5/17.
 */
import styled from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const Body = styled.div`
  @media all {
    //background: yellow;
    height: 100%;
    padding: 16px 16px 16px 272px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media (min-width: 320px) {
    //background: yellow;
    height: 100%;
    width: 100%;
    padding: 64px 16px 16px 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media (min-width: 360px) {
  }

  @media (min-width: 412px) {
  }

  @media (min-width: 640px) {
    height: 100%;
    padding: 16px 16px 16px 272px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media (min-width: 1024px) {
  }
`;

// ${(props) => props.style.height};

export default Body;
