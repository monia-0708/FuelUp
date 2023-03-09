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