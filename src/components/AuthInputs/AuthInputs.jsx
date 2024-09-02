import { useState } from "react";
import CustomInput, { Button, ControledDiv } from "./styleAuthComponents.jsx";

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControledDiv>
        <CustomInput
          label="email"
          invalid={emailNotValid}
          type="email"
          onChange={(event) => handleInputChange("email", event.target.value)}
        />{" "}
        <CustomInput
          label="password"
          invalid={passwordNotValid}
          type="password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
        {/*<p>*/}
        {/*  <Label $invalid={passwordNotValid}>Password</Label>{" "}*/}
        {/*  /!*<--- conditionaly adding css*!/*/}
        {/*  <Input*/}
        {/*    $invalid={passwordNotValid}*/}
        {/*    type="password"*/}
        {/*    onChange={(event) =>*/}
        {/*      handleInputChange("password", event.target.value)*/}
        {/*    }*/}
        {/*  />*/}
        {/*</p>*/}
      </ControledDiv>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button className="button" onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </div>
  );
}
