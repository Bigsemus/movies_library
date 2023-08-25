import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from '../MovieItem/MovieItem';
import classes from './MovieList.module.scss';

const MovieList = (props) => {
  const { movieList } = props;
  if (!movieList.length) {
    return (
      <h1 style={{ textAlign: 'center' }}>
        Do not have any movie :(
      </h1>
    );
  }
  return (
    <div className={classes.wrapLibraryMovie}>
      {movieList.map((movie) => (
        <MovieItem
          movie={movie}
          key={movie.id}
        />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.arrayOf(PropTypes.shape({
    length: PropTypes.number,
    id: PropTypes.number,
  })).isRequired,
};

export default MovieList;
