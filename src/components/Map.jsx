import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import {stacje} from './Demo';


const containerStyle = {
  width: '375px',
  height: '85vh'
};

const center = {
  lat: 54.526882,
  lng: 18.512408
};

function Map(props) {
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

  

  return (
    isLoaded && (
      <>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>         
      
          {stacje.map((stacja) => {
            return (
              <div key={stacja.id}>
            <Marker position={{ lat: stacja.lat, lng: stacja.lng }} icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
            //dodanie icon z logo
            // options={{ icon: stacja.name === 'Shell' ? shell : stacja.name === 'Orlen'? orlen : stacja.name === 'BP' ? bp:stacja.name === 'Lotos' ? lotos : stacja.name === 'MOYA' ? shell : stacja.name === 'Pod Żaglami' ? pod zaglami : stacja.name === 'AUTO - DAREX' ? auto - darex : stacja.name === 'Circle K' ? circleK : stacja.name === 'BMG' ? bmg : "",
            // }} 
            />
            </div>
            );
           })}
        </GoogleMap>
      </>
    )
  ) 
}

export default React.memo(Map)
