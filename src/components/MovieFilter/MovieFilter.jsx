import React from 'react';
import SortMoviesBy from '../SortMovies/SortMoviesBy';
import SearchMovieInput from '../SearchMovieInput/SearchMovieInput';
import classes from './MovieFilter.module.scss';

const MovieFilter = () => (
  <div className={classes.filterWrap}>
    <SortMoviesBy />
    <SearchMovieInput />
  </div>
);

export default MovieFilter;
