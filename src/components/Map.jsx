import React from 'react';
import { Button } from 'primereact/button';

function Prices() {
    return (
        <div className="card flex justify-content-center">
            <span className="p-buttonset">
                <Button label="Mapa" icon="pi pi-map" />
                
                <Button label="Tabela" icon="pi pi-list" />
            </span>
        </div>
    );
}
export default Prices;

import React from 'react';
import { GoogleMap, LoadScript, Marker } from 'react-google-maps';

function Map() {
  const mapStyles = {
    height: "300px",
    width: "200px"
  };

  const defaultCenter = {
    lat: 54.518890,
    lng: 18.530540
  };

  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;






// import React from "react";
// import { GoogleMapReact, useLoadScript, Marker } from "react-google-maps";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// function Prices(){
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627
//     },
//     zoom: 10
//   };

//   return (
    
//     <div style={{ height: '100vh', width: '100%' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key:  }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent
//           lat={59.955413}
//           lng={30.337844}
//           text="My Marker"
//         />
//       </GoogleMapReact>
//     </div>
//   );
// }

// export default GoogleMapReact;

