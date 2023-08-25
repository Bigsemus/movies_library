import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './SearchMovieInput.module.scss';
import { filterMoviesByQueryInputSearch } from '../../store/slices/movieList.slice';
import useTranslation from '../../hooks/useTranslation';

const SearchMovieInput = () => {
  const dispatch = useDispatch();
  return (
    <form
      className={classes.search}
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(filterMoviesByQueryInputSearch(event.target[0].value));
      }}
    >
      <input
        placeholder={useTranslation('sort-by.name')}
        type="text"
        className={classes.searchMovie}
      />
      <input
        value=""
        type="submit"
        className={classes.searchMovieBtn}
      />
    </form>
  );
};

export default SearchMovieInput;
