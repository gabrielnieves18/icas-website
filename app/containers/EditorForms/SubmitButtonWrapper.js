/**
 * Created by gaby on 7/5/17.
 */
import styled from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const Div = styled.div`
  @media all {
    display: flex;
    align-content: flex-start;
    flex-grow: 1;
    text-align: start;
    flex-wrap: wrap;
  }
  
  @media (min-width: 320px) {
    display: flex;
    align-content: center;
    text-align: center;
  }
  
  @media (min-width: 720px) {
    display: inline;
    align-content: flex-start;
    text-align: start;
  }
`;

export default Div;
