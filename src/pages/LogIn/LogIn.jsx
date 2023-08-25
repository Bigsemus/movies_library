import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../../styles/App.scss';
import classes from './Login.module.scss';
import LangBtn from '../../components/LangBtn/LangBtn';
import useTranslation from '../../hooks/useTranslation';

const LogIn = () => {
  const initialValues = {
    name: '',
    password: '',
  };
  const [loginData, setLoginData] = useState(initialValues);
  const [isAuth, setIsAuth] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('loginName', `${loginData.name}`);
    localStorage.setItem('loginPassword', `${loginData.password}`);
    const registerName = localStorage.getItem('registerName');
    const registerPassword = localStorage.getItem('registerPassword');
    const loginName = localStorage.getItem('loginName');
    const loginPassword = localStorage.getItem('loginPassword');
    if (!loginName || !loginPassword || !registerName || !registerPassword) {
      // eslint-disable-next-line
      alert('Sorry, you don\'t register :(');
    } else if (loginName !== registerName || loginName !== loginPassword) {
      // eslint-disable-next-line
      alert('Maybe you forgot Password or Login ? You can register new :)');
    } else if (loginName === loginPassword && registerName === registerPassword) {
      localStorage.setItem('isAuth', 'true');
      setIsAuth(true);
    }
  }

  return (
    <>
      <LangBtn />
      <div className={classes.wrapLogin}>
        {
          isAuth && <Redirect to="/movies" />
        }
        <form
          onSubmit={(event) => handleSubmit(event)}
        >
          <h2>{useTranslation('login.login')}</h2>
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
            type="submit"
          >
            {useTranslation('buttons.login')}
          </button>
        </form>
        <p>
          {useTranslation('login.ask')}
          <Link to="/register">
            {useTranslation('login.prompt')}
          </Link>
        </p>
      </div>
    </>
  );
};

export default LogIn;
