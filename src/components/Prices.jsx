import { Button } from "primereact/button";
import Array from "./Array";
import Map from "./Map";
import React, { useState } from "react";
import Search from "./Search";

function Prices() {
  const [set, setSet] = useState(1);
  const [showSearch, setShowSearch] = useState(false);

  const handleSetSearch = () => {
    setSet(1);
    setShowSearch(true);
  };

  const handleSetMap = () => {
    setSet(2);
    setShowSearch(false);
  };

  return (
    <>
      <div className="button-card">
        <div className="card flex justify-content-center">
          <span className="p-buttonset">
            <Button
              className="button-filtruj"
              style={{
                backgroundColor: "#800080",
                width: "110px",
                marginLeft: "80px",
                marginBottom: "20px",
              }}
              onClick={handleSetSearch}
              label="Filtruj"
              icon="pi pi-list"
            />

            <Button
              className="button-mapa"
              style={{
                backgroundColor: "#800080",
                width: "110px",
                marginBottom: "20px",
              }}
              onClick={handleSetMap}
              label="Mapa"
              icon="pi pi-map"
            />
          </span>

          {set === 1 && showSearch ? <Search /> : null}
          {set === 2 && <Map />}
          {set === 1 && !showSearch ? <Array /> : null}
        </div>
      </div>
    </>
  );
}

export default Prices;
