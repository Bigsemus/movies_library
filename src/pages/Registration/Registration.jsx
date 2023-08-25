import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from '../LogIn/Login.module.scss';
import useTranslation from '../../hooks/useTranslation';

const Registration = () => {
  const initialValues = {
    name: '',
    password: '',
  };
  const [registerData, setRegisterData] = useState(initialValues);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegisterData((prevState) => ({ ...prevState, [name]: value }));
  };

  function setRegisterValueLocalStorage(event) {
    event.preventDefault();
    localStorage.setItem('registerName', `${registerData.name}`);
    localStorage.setItem('registerPassword', `${registerData.password}`);
  }

  return (
    <div className={classes.wrapLogin}>
      <h2>{useTranslation('register.register')}</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder={useTranslation('input.login-name')}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder={useTranslation('input.login-pass')}
          onChange={handleInputChange}
        />
        <button
          type="button"
          onClick={setRegisterValueLocalStorage}
        >
          <NavLink to="/">
            <p>{useTranslation('buttons.register')}</p>
          </NavLink>
        </button>
      </form>
      <p>
        {useTranslation('register.ask')}
        <Link to="/">{useTranslation('register.prompt')}</Link>
      </p>
    </div>
  );
};

export default Registration;
