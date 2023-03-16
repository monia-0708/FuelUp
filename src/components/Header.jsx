import { Button } from "primereact/button";
import "primeicons/primeicons.css";


function Header() {
  return (
    <div className="header-container">
      <h1 className="logo">FuelUp</h1>
      <div className="signin">
     
        <Button icon="pi pi-user" rounded text severity="info" aria-label="User"/>
      </div>
    </div>
  );
}

export default Header;
