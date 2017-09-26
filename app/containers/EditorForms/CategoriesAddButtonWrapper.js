/**
 * Created by gaby on 7/5/17.
 */
import styled from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const Div = styled.div`
  @media all {
    border: 3px solid #EC644B;
    border-radius: 8px;
    color: #EC644B;
    font-size: 28px;
    font-weight: 400;
    height: 56px;
    margin: auto 16px;
    opacity: ${(props) => props.disabled ? '0.6' : '1.0'};
    visibility: ${ ({ visible }) => visible ? 'visible' : 'hidden' };
    width: 56px;

    &:hover {
      cursor: pointer;
      transform: scale(1.0, 1.0);
    }

    &:active {
      transform: scale(0.95, 0.95);
    }
  }
  
  @media (min-width: 320px) {
    margin: 0 0 16px 0;
    position: relative;
    top: 32px;
  }
  
  @media (min-width: 720px) {
    margin: auto 16px;
    position: inherit;
  }
`;

export default Div;
