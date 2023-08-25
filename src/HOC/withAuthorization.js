import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuthorization = (Component) => {
  const authorization = (props) => {
    const isAuthLocalStorage = localStorage.getItem('isAuth');
    return JSON.parse(isAuthLocalStorage)
      ? <Component {...props} />
      : <Redirect to="/login" />;
  };
  return authorization;
};

export default withAuthorization;
