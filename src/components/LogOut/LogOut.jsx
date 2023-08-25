import React from 'react';
import { Link } from 'react-router-dom';
import classes from './LogOut.module.scss';
import useTranslation from '../../hooks/useTranslation';

const LogOut = () => {
  function removeStorage() {
    localStorage.setItem('isAuth', 'false');
    localStorage.removeItem('loginName');
    localStorage.removeItem('loginPassword');
  }

  return (
    <Link to="/">
      <button
        type="button"
        className={classes.logOut}
        onClick={removeStorage}
      >
        {useTranslation('buttons.log-out')}
      </button>
    </Link>
  );
};

export default LogOut;
