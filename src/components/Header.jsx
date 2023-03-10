import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import { ToggleButton } from 'primereact/togglebutton';

function Header() {
  return (
    <div className="header-container">
      <h1>FuelUp</h1>
      <div className="signin">
      {/* <ToggleButton checked={checked} onChange={(e) => setChecked(e.value)} /> */}
        <Button icon="pi pi-user" rounded text severity="info" aria-label="User"/>
      </div>
    </div>
  );
}

export default Header;
