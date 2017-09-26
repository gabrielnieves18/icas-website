/**
 * Created by gaby on 6/22/17.
 */
import React from 'react';
import Wrapper from './Wrapper';

import SpotinIconMarker from '../../components/SpotinIconMarker/index';

export default class LoginHeader extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Wrapper>
        <SpotinIconMarker width={40} height={40} white />
        <h2>Spotin</h2>
      </Wrapper>
    );
  }
}
