import PropTypes from 'prop-types';
import React from 'react';
import CounterLike from '../CounterLike/CounterLike';
import StarRating from '../StarRating/StarRating';
import classes from './MovieItem.module.scss';
import TitleMovieForDescription from '../TitleMovieForDescription/TitleMovieForDescription';

const MovieItem = (props) => {
  const { movie } = props;
  return (
    <div className={classes.movieCard}>
      <div className={classes.movieCardMain}>
        <div>
          <CounterLike
            movie={movie}
          />
        </div>
        <div className={classes.wrapContent}>
          <TitleMovieForDescription
            movie={movie}
          />
          <img
            className={classes.poster}
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt="poster"
          />
        </div>
      </div>
      <div className={classes.blockStars}>
        <StarRating
          movie={movie}
        />
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    release_date: PropTypes.string,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
  }).isRequired,
};

export default MovieItem;
