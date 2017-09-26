/**
 * Created by gaby on 6/22/17.
 */
import styled, { injectGlobal } from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const Wrapper = styled.div`
  
  // Default properties
  @media all {
    height: 100%;
    padding: 0 6%; // top right bottom left
    margin-bottom: 32px;
    width: 100%;
  }

  // Smartphones, iPhone, portrait 480x320 phones
  @media (min-width:320px)  {
    padding-left: 6%;
    padding-right: 6%;
  }
  
  // Portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. 
  @media (min-width:481px)  {
    
  }
  
  // Portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones
  @media (min-width:641px)  {
    padding-left: 18%;
    padding-right: 18%;
  }
  @media (min-height:640px)  {
    padding-top: 0;
    padding-bottom: 0;
  }
  
  // Tablet, landscape iPad, lo-res laptops ands desktops 
  @media (min-width:961px)  {
    padding-left: 28%;
    padding-right: 28%;
  }
  @media (min-height:961px)  {
    margin-top: 5%;
    margin-bottom: 6%;
  }

  // Big landscape tablets, laptops, and desktops
  @media (min-width:1024px) {
    padding-left: 32%;
    padding-right: 32%;
  }
  
  // Hi-res laptops and desktops
  @media (min-width:1281px) {
    padding-left: 35%;
    padding-right: 35%;
  }
  @media (min-height:1024px) {
    margin-top: 7%;
    margin-bottom: 8%;
  }
`;

/* eslint no-unused-expressions: 0 */
// language=SCSS
injectGlobal`
  #app {
    background-image: linear-gradient(-223deg, #DDF6BC 0%, #C7EE9C 19%, #B8E986 50%);
    // border: 1px solid #979797;
  }
`;

export default Wrapper;
