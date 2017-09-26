/**
 * Created by gaby on 6/22/17.
 */
import styled from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const Wrapper = styled.div`  
  @media all {
    margin: 0 0 8% 0; // top right bottom left
    position: relative;
    padding: 5% 25% 0 25%; // top right bottom left
    width: 100%;
  }
  
  @media (min-width: 320px) {
    padding: 5% 6% 0 6%; // top right bottom left
	};

  @media (min-width: 360px) {
    //padding: 10% 6% 0 6%; // top right bottom left
  };
  	
	@media (min-width: 640px) {
    padding: 15% 18% 0 18%; // top right bottom left
  };
	
	@media (min-width: 1024px) {
    padding: 5% 30% 0 30%; // top right bottom left
	};
`;

export default Wrapper;
