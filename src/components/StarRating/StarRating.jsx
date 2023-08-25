import React from 'react';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import classes from './StarRating.module.scss';
import { handleMovieRatingChange } from '../../store/slices/movieList.slice';

const StarRating = (props) => {
  const { movie } = props;
  const dispatch = useDispatch();
  return (
    <div>
      {[...Array(5)].map((star, index = uuid()) => {
        const value = {
          movieID: movie.id,
          ratingValue: index + 1,
        };
        return (
          <FaStar
            key={index}
            className={classes.star}
            size={22}
            color={value.ratingValue <= movie.ratingForFilter ? '#ffbb00' : '#6b7b8c'}
            onClick={() => {
              dispatch(handleMovieRatingChange(value));
            }}
          />
        );
      })}
    </div>
  );
};

StarRating.propTypes = {
  movie: PropTypes.shape({
    rating: PropTypes.number,
    ratingForFilter: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
};

export default StarRating;
