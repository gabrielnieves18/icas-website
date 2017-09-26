/**
 * Created by gaby on 7/5/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import ChevronDown from '../ChevronDown/index';

const Dropdown = (props) => {
  const { children } = props;

  /* eslint-disable no-tabs */
  // language=SCSS
  const ContentWrapper = styled.div`
    @media all {
      border: solid thin #9B9B9B;
      display: inline-block;
      color: #000000;
      cursor: pointer;
      font-family: HiraginoSansGB-W3, sans-serif;
      font-size: 16px;
      line-height: 24px;
      position: relative;
      height: 56px;
      width: 256px;
      vertical-align: middle;
      
      & select {
        appearance: none;
        background-color: #FAFAFA;
        border-radius: 0;
        color: black;
        cursor: pointer;
        font-size: inherit;
        padding: 16px;
        margin: auto;
        outline: none;
        text-indent: 0.01px;
        text-overflow: '';
        /*Hiding the select arrow for firefox*/
        -moz-appearance: none;
        /*Hiding the select arrow for chrome*/
        -webkit-appearance:none;
        /*Hiding the select arrow default implementation*/
        width: 100%;
      }

      /*Hiding the select arrow for IE10*/
      & select::-ms-expand {
        display: none;
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        pointer-events: none;
      }

      //&::after { /*  Custom dropdown arrow */
      //  content: "V";
      //  height: 1em;
      //  font-size: .625em;
      //  line-height: 1;
      //  right: 1.2em;
      //  top: 50%;
      //  margin-top: -.5em;
      //}

      //&::before { /*  Custom dropdown arrow cover */
      //  width: 2em;
      //  right: 0;
      //  top: 0;
      //  bottom: 0;
      //  border-radius: 0 3px 3px 0;
      //  background-color: rgba(0,0,0,.2);
      //}

      &::after {
        color: rgba(0,0,0,.6);
      }

      & select[disabled] {
        color: rgba(0,0,0,.25);
      }
    }
  `;

  /* eslint-disable no-tabs */
  // language=SCSS
  const IconWrapper = styled.div`
    @media all {
      position: absolute;
      top: 13px;
      right: 22px;
    }
  `;

  return (
    <ContentWrapper>
      {React.Children.toArray(children)}
      <IconWrapper>
        <ChevronDown width={24} height={24} color="#000000" />
      </IconWrapper>
    </ContentWrapper>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node,
};

export default Dropdown;
