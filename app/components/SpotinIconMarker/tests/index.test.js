import React from 'react';
import { shallow, mount } from 'enzyme';

import SpotinIconMarker from '../index';

describe('<SpotinIconMarker />', () => {
  const className = 'icon';
  const width = 80;
  const height = 60;

  it('should render an <svg /> tag', () => {
    const renderedComponent = shallow(<SpotinIconMarker width={width} height={height} />);
    expect(renderedComponent.type()).toEqual('svg');
  });

  it('className should be undefined', () => {
    const renderedComponent = shallow(<SpotinIconMarker width={width} height={height} />);
    expect(renderedComponent.prop('className')).toBeUndefined();
  });

  it(`className should be defined and equal ${className}`, () => {
    const renderedComponent = shallow(<SpotinIconMarker className={className} width={width} height={height} />);
    expect(renderedComponent.prop('className')).toEqual(className);
  });

  it(`should adopt width: ${width}`, () => {
    const renderedComponent = shallow(<SpotinIconMarker width={width} height={height} />);
    expect(renderedComponent.prop('width')).toEqual(width);
  });

  it(`Spotin adopt height: ${height}`, () => {
    const renderedComponent = shallow(<SpotinIconMarker width={width} height={height} />);
    expect(renderedComponent.prop('height')).toEqual(height);
  });

  it('Spotin marker should not be white', () => {
    const renderedComponent = mount(<SpotinIconMarker width={width} height={height} />);
    expect(renderedComponent.prop('white')).toBeUndefined();
  });

  it('Spotin marker should be white', () => {
    const renderedComponent = mount(<SpotinIconMarker width={width} height={height} white />);
    expect(renderedComponent.prop('white')).toEqual(true);
  });
});
