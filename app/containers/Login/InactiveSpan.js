/**
 * Created by gaby on 6/22/17.
 */
import styled from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const InactiveSpan = styled.span`
  @media all {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 15px;
    color: rgba(155,155,155,0.85);
    letter-spacing: 1.12px;
    padding: 4px 18px;
    
    &:hover {
      color: white;
    }
  }

  @media (min-width: 320px) {
  };

  @media (min-width: 360px) {
  };

  @media (min-width: 640px) {
  };

  @media (min-width: 1024px) {
  };
`;

export default InactiveSpan;
