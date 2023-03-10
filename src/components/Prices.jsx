import React from "react";
import { Button } from "primereact/button";
import Array from "./Array";
import Map from "./Map";

function Prices() {
  return (
    <>
<div className="button-card">
      <div className="card flex justify-content-center">
        <span className="p-buttonset">
          <Button label="Mapa" icon="pi pi-map" />
          <Button label="Tabela" icon="pi pi-list" />
        </span>
      </div>
    </div>
    <Array />
    <Map />
    </>
  )
}

export default Prices;

