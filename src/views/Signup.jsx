import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";

function Signup() {
  return (
    <div className="signup-container">
      <form className="signup-window">
        <span className="flex flex-column gap-2">
          <label htmlFor="username">E-mail</label>
          <InputText id="username" />
        </span>
        <span></span>
      </form>
    </div>
  );
}

export default Signup;
