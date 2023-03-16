import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import React, { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const load = () => {
      setLoading(true);

      setTimeout(() => {
          setLoading(false);
      }, 500);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username: ", username);
    console.log("Password: ", password);
    // add logic for authentication
  };


  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="formLog">
        <div className="input-container1">
          <label htmlFor="username">E-mail</label>
          <br></br>
          <InputText
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className="input-container2">
          <label htmlFor="password">Password</label>
          <br></br>
          <div className="password-container card flex justify-content-center">
            <Password
              value={value}
              onChange={(e) => setValue(e.target.value)}
              toggleMask
            />
          </div>
        </div>

        <div className="button-container card flex flex-wrap justify-content-center gap-3">
          <Button
            label="Zaloguj się"
            icon="pi pi-check"
            loading={loading}
            onClick={load}
          />
          <Button className="button_regin" label="Zakładam konto" />
        </div>
      </form>
    </div>
  );
}


export default Signup;
