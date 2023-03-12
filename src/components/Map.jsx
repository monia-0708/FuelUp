import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Array from './Array';

const containerStyle = {
  width: '375px',
  height: '600px'
};

const center = {
  lat: 54.526882,
  lng: 18.512408
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <></>
        {/* {Array.map((stacja) => (
          <Marker
            key={stacja.id}
            position={{ lat: stacja.lat, lng: stacja.lng }}
            icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
          />
        ))} */}
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)
