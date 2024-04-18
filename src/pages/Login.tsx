import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as EmailValidator from 'email-validator';

export function Login() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/carteira');
  };

  const validateEmail = ():boolean => {
    const valid = EmailValidator.validate(email);
    return !valid;
  };

  return (
    <>
      <div>
        Login Page
      </div>
      <input
        type="email"
        id="email"
        onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value) }
      />
      <button
        type="submit"
        onClick={ handleLogin }
        disabled={ validateEmail() }
      >
        Entrar
      </button>
    </>
  );
}
