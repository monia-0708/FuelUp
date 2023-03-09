import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';


function Header() {
    return <h1>
        <div>FuelUp</div>
        <Button icon="pi pi-user" rounded text severity="info" aria-label="User" />
        
    </h1>;
}

export default Header;