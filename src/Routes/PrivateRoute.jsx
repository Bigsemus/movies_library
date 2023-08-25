import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes, { bool } from 'prop-types';
import { compose } from 'redux';
import withAuthorization from '../HOC/withAuthorization';

const PrivateRoute = ({ children, isAuthLocalStorage, ...rest }) => (
  <Route
    {...rest}
    render={() => (isAuthLocalStorage ? children : <Redirect to="/" />)}
  />
);

PrivateRoute.propTypes = {
  children: PropTypes.shape({
    key: PropTypes.shape({}),
  }),
  isAuthLocalStorage: bool.isRequired,
};

PrivateRoute.defaultProps = {
  children: PropTypes.shape({
    key: null,
  }),
};

export default compose(withAuthorization)(PrivateRoute);
