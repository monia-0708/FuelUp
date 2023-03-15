import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import {stacje} from './Demo';
import shell from "../assets/shell.svg";
import orlen from "../assets/orlen.svg";
import Gas from "../assets/Gas.svg";
import lotos from "../assets/lotos.svg";
import bp from "../assets/bp.svg";
import circle from "../assets/circle.svg";
import bmg from "../assets/bmg.svg";


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
            <Marker position={{ lat: stacja.lat, lng: stacja.lng }} 
           
            options={{ 
              icon:
          stacja.name === "Shell"
            ? {
                url: shell,
                scaledSize: new window.google.maps.Size(20, 20),
              }
            : stacja.name === "Orlen"
            ? {
                url: orlen,
                scaledSize: new window.google.maps.Size(50, 50),
              }
              : stacja.name === "Lotos"
            ? {
                url: lotos,
                scaledSize: new window.google.maps.Size(40, 40),
              }
             : stacja.name === "BP"
            ? {
                url: bp,
                scaledSize: new window.google.maps.Size(30, 30),
              }
              : stacja.name === "Circle K"
            ? {
                url: circle,
                scaledSize: new window.google.maps.Size(50, 50),
              }
              : stacja.name === "BMG"
            ? {
                url: bmg,
                scaledSize: new window.google.maps.Size(30, 30),
            }
            : {
                url: Gas,
                scaledSize: new window.google.maps.Size(20, 20),
              },
            }} 
            />
            </div>
            )
           })}
        </GoogleMap>
      </>
    )
  ) 
}

export default React.memo(Map)
