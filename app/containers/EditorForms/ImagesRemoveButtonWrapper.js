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
    background-color: #EC644B;
    color: white;
    font-size: 18px;
    font-weight: 400;
    font-family: Arial, sans-serif !important;
    height: 42px;
    margin: 0;
    opacity: ${(props) => props.disabled ? '0.6' : '1.0'};
    position: relative;
    top: 53px;
    left: 340px;
    user-select: none;
    visibility: ${ ({ visible }) => visible ? 'visible' : 'hidden' };
    width: 42px;
    z-index: 800;

    &:hover {
      cursor: pointer;
      transform: scale(1.0, 1.0);
    }

    &:active {
      transform: scale(0.95, 0.95);
    }
  }
  
  @media (min-width: 320px) {
    border-radius: 4px;
    font-size: 10px;
    height: 24px;
    top: 34px;
    left: 224px;
    width: 24px;
  }
  
  @media (min-width: 720px) {
    border-radius: 8px;
    font-size: 18px;
    height: 48px;
    top: 53px;
    left: 340px;
    width: 48px;
  }
`;

export default Div;
