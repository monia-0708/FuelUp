import { Button } from "primereact/button";
import Array from "./Array";
import Map from "./Map";
import React, { useState } from "react";
import Search from './Search'; 
function Prices() {
  const [set, setSet] = useState(1);

  const handleSetSearch = () => {
    setSet(1);
  }

  const handleSetMap = () => {
    setSet(2);
  }

  return (
    <>
      <div className="button-card" >
        <div className="card flex justify-content-center">
          <span className="p-buttonset" >
            <Button style={{backgroundColor: "#800080"}} onClick={handleSetSearch} label="Filtruj" icon="pi pi-list" />
            
            
            <Button style={{backgroundColor: "#800080"}} onClick={handleSetMap} label="Mapa" icon="pi pi-map" />
          </span>
          {set === 2 && <Map />} {/* warunek, aby wyświetlić Map tylko dla set=2 */}
          {set === 1 && <Search />} {/* warunek, aby wyświetlić Search tylko dla set=1 */}
          {set === 1 && <Array />}
           {/* warunek, aby wyświetlić Array tylko dla set=1 */}
        </div>
      </div>
    </>
  );
}

export default Prices;

