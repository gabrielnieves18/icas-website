/**
 * Created by gaby on 6/26/17.
 */

import styled from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const A = styled.a`
  @media all {

    color: darkgray;

    float: none !important;
    font-family: 'Roboto', sans-serif;
    font-size: small;

    margin-top: 0px;
    
    padding-left: 6px;
    padding-right: 6px;
  };

  @media (min-width: 320px) {
    margin-top: 16px;
  };

  @media (min-width: 360px) {
  };

  @media (min-width: 640px) {
    float: right !important;
    margin-top: 4px;
  };

  @media (min-width: 1024px) {
  };
`;

export default A;
