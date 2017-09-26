/**
 * Created by gaby on 7/23/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Index = withGoogleMap((props) => {
  const {
    lat, lng,
    onMapClick,
    onMapLoad,
    onMarkerRightClick,
  } = props;

  console.log('Google Map', lat, lng);

  return (
    <GoogleMap
      ref={onMapLoad}
      defaultZoom={12}
      defaultCenter={{ lat, lng }}
      onClick={onMapClick}
    >

      {props.markers.map((marker, index) => (
        <Marker
          {...marker}
          onRightClick={() => onMarkerRightClick(index)}
        />
      ))}
    </GoogleMap>
  );
});

Index.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  onMapClick: PropTypes.func,
  onMapLoad: PropTypes.func,
  onMarkerRightClick: PropTypes.func,
};


export default Index;
