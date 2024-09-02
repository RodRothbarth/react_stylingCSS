import { useState } from 'react';
import {ControledDiv, Input, Label} from "./styleAuthComponents.js";

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControledDiv>
        <p>
          <Label invalid={emailNotValid}>Email</Label>
          <Input
              invalid={emailNotValid}
            type="email"
            // style={{backgroundColor: emailNotValid? '#fed2d2':'#d1d5db'}}
            // className={emailNotValid ? 'invalid' : undefined} //<--- this has to be undefined
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
         <Label invalid={passwordNotValid}>Password</Label>  {/*<--- conditionaly adding css*/}
          <Input
              invalid={passwordNotValid}
            type="password"
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </ControledDiv>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className='button' onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
