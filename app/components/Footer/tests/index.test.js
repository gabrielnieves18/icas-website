/**
 * Created by gaby on 6/22/17.
 */

import React from 'react';
import { shallow } from 'enzyme';


import Footer from '../index';

describe('<Footer />', () => {
  const width = 80;
  const height = 60;

  it('should render an <div /> tag', () => {
    const renderedComponent = shallow(<Footer width={width} height={height} />);
    expect(renderedComponent.type()).toEqual('div');
  });
});
