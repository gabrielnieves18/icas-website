/**
 * Created by gaby on 6/22/17.
 */
import styled, { injectGlobal } from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const LocaleWrapper = styled.div`
  
  // Default properties
  @media all {
    width: 225px;
    margin-bottom: 6%;
  }

  // Smartphones, iPhone, portrait 480x320 phones
  @media (min-width:320px)  {
    margin-left: 0;
  }
  
  // Portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. 
  @media (min-width:481px)  {
  }
  
  // Portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones
  @media (min-width:641px)  {
    margin-left: 48px;
  }
  @media (min-height:641px)  {
    margin-bottom: 3%;
  }
  
  // Tablet, landscape iPad, lo-res laptops ands desktops 
  @media (min-width:961px)  {
    margin-left: 48px;
  }

  // Big landscape tablets, laptops, and desktops
  @media (min-width:1025px) {
  }

  // Hi-res laptops and desktops
  @media (min-width:1281px) {
    margin-left: 48px;
  }
`;

export default LocaleWrapper;
