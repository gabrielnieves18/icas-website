/**
 * Created by gaby on 6/22/17.
 */
import styled from 'styled-components';

/* eslint-disable no-tabs */
// language=SCSS
const Wrapper = styled.div`  
  @media all {
    padding: 2% 3%;
    visibility: visible;
  }
  
  @media (min-width: 320px) {
    visibility: hidden;
	}

  @media (min-width: 500px) {
    visibility: visible;
  }
  
	@media (min-width: 640px) {
    visibility: visible;
  }
`;

export default Wrapper;
