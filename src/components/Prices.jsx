import { Button } from "primereact/button";
import Array from "./Array";
import Map from "./Map";
import React, { useState } from "react";


function Prices() {
  const [set, setSet] = useState(1);
  return (
    <>
      <div className="button-card">
        <div className="card flex justify-content-center">
          <span className="p-buttonset">
          
            <Button onClick={() => setSet(1)} label="Tabela" icon="pi pi-map" />
            <Button onClick={() => setSet(2)} label="Mapa" icon="pi pi-list" />
          </span>
          {set === 1 ? <Array /> : <Map />}
        </div>
      </div>
      
    </>
  );
}

export default Prices;
