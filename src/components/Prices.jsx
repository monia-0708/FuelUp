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



// import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "react-google-maps";


// function Prices() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
//   });

//   if (!isLoaded) return <div>Loading...</div>;
//   return <Map />;
// }

// function Map() {
//   const center = useMemo(() => ({ lat: 54.518890, lng: 18.530540 }), []);

//   return (
//     <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
//       <Marker position={center} />
//     </GoogleMap>
//   );
// }

export default Prices;