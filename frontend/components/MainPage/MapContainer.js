import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
 
require('dotenv-flow').config();

// Taken from https://www.npmjs.com/package/@react-google-maps/api
const containerStyle = {
  width: '400px',
  height: '400px'
};
 
const center = {
  lat: 40.712,
  lng: 74.007
};
 
function MapContainer() {
  const [map, setMap] = React.useState(null)
 
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
 
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
 
  return (
    <LoadScript
      googleMapsApiKey={process.env.GOOGLE_MAPS_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}
 
export default React.memo(MapContainer)