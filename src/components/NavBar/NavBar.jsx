import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavBar.module.scss';
import useTranslation from '../../hooks/useTranslation';

const NavBar = () => (
  <div>
    <nav>
      <Link
        className={classes.nav}
        to="/movies"
      >
        {useTranslation('nav-bar.home')}
      </Link>
    </nav>
  </div>
);

export default NavBar;
