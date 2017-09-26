/**
 * Created by gaby on 6/30/17.
 */
import styled from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const Wrapper = styled.li`
  @media all {
    color: #7d7d7d;
    margin: 4px 20px;
    font-size: 16px;
    line-height: 26px;
    list-style-type: none;
    display: list-item;
    text-align: -webkit-match-parent;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: none;
    box-sizing: border-box;
    font-family: -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  @media (min-width: 320px) {
    &.active::before {
      background: #FFF;
      color: #01966F;
    }

    &::before {
      content: none;
      counter-increment: steps;
      display: inline-table;
      margin-right: 10px;
      background: #13B57D;
      color: #FFF;
      text-align: center;
      font-weight: bold;
      width: 26px;
      height: 26px;
      border-radius: 13px;
    }
  }

  @media (min-width: 360px) {
  }

  @media (min-width: 412px) {
    &::before {
      content: counter(steps);
    }
  }

  @media (min-width: 640px) {
  }

  @media (min-width: 1024px) {
  }
  
  &:hover {
    cursor: pointer;
  }
  
  &:focus {
    font-weight: bold;
  }

  &.active {
    font-weight: bold;
  }
`;

export default Wrapper;
