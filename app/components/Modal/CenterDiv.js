/**
 * Created by gaby on 7/10/17.
 */
import styled from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const DataSection = styled.div`
  @media all {
    background: #fafafa;
    border-radius: 4px;
    flex-grow: 1;
    justify-self: center;
    margin: 20%;
    padding: 8px 16px;
  }

  @media (min-width: 320px) {
    margin: auto 16px;
  }

  @media (min-width: 360px) {
  }

  @media (min-width: 412px) {
  }

  @media (min-width: 640px) {
    margin:  auto 20%;
  }

  @media (min-width: 1024px) {
    margin:  0 25%;
  }

  @media (min-width: 1500px) {
    margin:  0 32%;
  }
`;

export default DataSection;
