import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import React, { useState } from "react";
import { Toast } from "primereact/toast";
import { useRef } from "react";
import supabase from "../services/supabase";
import { useNavigate } from "react-router-dom";

function Signup() {
  const toast = useRef(null);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const showError = (e, msg) => {
    e.preventDefault();
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: msg,
      life: 3000,
    });
  };

  const handleSignUp = async(event) => {
    event.preventDefault();

    const formElements = event.target.elements;

    if (formElements[1].value !== formElements[2].value) {
      showError("Proszę wprowadzić takie same hasła w oba pola");
      return;
    }

    let { data, error } = await supabase.auth.signUp({
      email: formElements[0].value,
      password: formElements[1].value,
    });

    if (data.user) {
      navigate("/");
    } 
     if (error) {
      showError(error.message);
    }

    const handleAlreadyHaveAnAccount = () => {
      navigate("/signin");
    };
    
  };



  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Username: ", username);
  //   console.log("Password: ", password);
  //   // add logic for authentication
  // };

  return (
    <div className="signup-container">
      <Toast ref={toast} />
      <form className="formLog" onSubmit={handleSignUp}>
        <h1 className="Hello">Hello</h1>
        <div className="input-container1">
          <div className="label-container">
            <label htmlFor="username">E-mail</label>
          </div>
          <InputText
            id="username"
            aria-describedby="username-help"
            
          />
        </div>

        <div className="input-container2">
          <div className="label-container">
            <label htmlFor="password">Password</label>
          </div>
          <div className="password-container card flex justify-content-center">
            <span>
              <Password className="signup1" toggleMask feedback={false} />
            </span>
          </div>
        </div>

        <div className="input-container2">
          <div className="label-container">
            <label htmlFor="password2">Confirm Password</label>
          </div>
          <div className="password-container card flex justify-content-center">
            <span>
              <Password className="signup2" toggleMask feedback={false} />
            </span>
          </div>
        </div>

        <div className="button-container card flex flex-wrap justify-content-center gap-3">
          <Button 
            className="button_regin1"
            label="Zaloguj się"
            severity="help"
            icon="pi pi-check"
          />
          <Button 
            className="button_regin2"
            label="Nie masz jeszcze konta ?"
            severity="help"
            text
            
          />
        </div>
      </form>
    </div>
  );
}

export default Signup;
