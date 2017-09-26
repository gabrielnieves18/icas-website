 /*
  * Created by gaby on 7/10/17.
  */
import styled from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const DataSection = styled.div`
  @media all {
    background: rgba(0, 0, 0, 0.18);
    display: flex;
    position: fixed;
    justify-content: center;
    top: 0;
    left: 0;
    
    height: 100%;
    width: 100%;
    
    z-index: 100000;
  }

  // Smartphones, iPhone, portrait 480x320 phones
  @media (min-width:320px)  {
  }

  // Portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. 
  @media (min-width:481px)  {
  }

  // Portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones
  @media (min-width:641px)  {
  }
  @media (min-height:641px)  {
  }

  // Tablet, landscape iPad, lo-res laptops ands desktops 
  @media (min-width:961px)  {
  }

  // Big landscape tablets, laptops, and desktops
  @media (min-width:1025px) {
  }

  // Hi-res laptops and desktops
  @media (min-width:1281px) {
  }
`;

export default DataSection;
