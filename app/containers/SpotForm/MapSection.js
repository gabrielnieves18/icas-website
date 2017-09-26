/**
 * Created by gaby on 7/29/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import { Field } from 'redux-form/immutable';

import renderMapCoord from './renderMapCoord';

import GoogleMap from './GoogleMap';

const MapSection = (props) => {
  const {
    mapCenter: { lat, lng },
    markers,
    onTouchMap,
    onLatChange,
    onLngChange } = props;

  return (
    <Col xs="12" md="6" >
      <div style={{ paddingTop: '8px' }}>
        <Field name="lat" type="number" component={renderMapCoord} label="lat" onChange={(evt) => onLatChange(Number(evt.target.value))} />
        <Field name="lng" type="number" component={renderMapCoord} label="lng" onChange={(evt) => onLngChange(Number(evt.target.value))} />
        <div style={{ width: '100%', height: '300px', float: 'left' }}>
          <GoogleMap
            containerElement={<div style={{ height: '100%' }} />}
            lat={lat}
            lng={lng}
            mapElement={<div style={{ height: '100%' }} />}
            markers={markers}
            onMapLoad={_.noop}
            onMapClick={(evt) => {
              const coord = evt.latLng;
              onTouchMap(coord.lat(), coord.lng());
            }}
            onMarkerRightClick={_.noop}
          />
        </div>
      </div>
    </Col>
  );
};

MapSection.propTypes = {
  mapCenter: PropTypes.object,
  markers: PropTypes.array,
  onLatChange: PropTypes.func.isRequired,
  onLngChange: PropTypes.func.isRequired,
  onTouchMap: PropTypes.func.isRequired,
};

export default MapSection;
