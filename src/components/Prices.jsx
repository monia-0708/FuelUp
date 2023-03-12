import { Button } from "primereact/button";
import Array from "./Array";
import Map from "./Map";
import React, { useState } from "react";



function Prices() {
  const [set, setSet] = useState(1);
  return (
    <>
      <div className="button-card" >
        <div className="card flex justify-content-center">
          <span className="p-buttonset" >
          
            <Button style={{backgroundColor: "#800080"}} onClick={() => setSet(1)} label="Tabela" icon="pi pi-list" />
            <Button style={{backgroundColor: "#800080"}} onClick={() => setSet(2)} label="Mapa" icon="pi pi-map" />
          </span>
          {set === 1 ? <Array /> : <Map />}
        </div>
      </div>
      
    </>
  );
}

export default Prices;
