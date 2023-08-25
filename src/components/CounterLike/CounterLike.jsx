import React from 'react';
import PropTypes, { number } from 'prop-types';
import { useDispatch } from 'react-redux';
import imgLike from '../../assets/a-icon-like-1.svg';
import classes from './CounterLike.module.scss';
import { handleMovieLikeChange } from '../../store/slices/movieList.slice';
import useTranslation from '../../hooks/useTranslation';

const CounterLike = (props) => {
  const { movie } = props;
  const dispatch = useDispatch();
  const initialState = {
    movieID: movie.id,
    value: '',
  };
  function increment() {
    dispatch(handleMovieLikeChange({ ...initialState, value: 'increment' }));
  }

  function decrement() {
    dispatch(handleMovieLikeChange({ ...initialState, value: 'decrement' }));
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapLike}>
        <button
          type="button"
          className={classes.buttonLike}
          onClick={increment}
        >
          <img src={imgLike} alt="like" />
        </button>
        <button
          type="button"
          className={classes.buttonUnLike}
          onClick={decrement}
        >
          <img src={imgLike} className={classes.imgUnLike} alt="like" />
        </button>
        <p>{useTranslation('likes.likes')}</p>
      </div>
      <div className={classes.wrapCountLike}>
        <h5>{movie.likeForFilter}</h5>
      </div>
    </div>
  );
};

CounterLike.propTypes = {
  movie: PropTypes.shape({
    likeForFilter: number,
    id: number,
  }).isRequired,
};

export default CounterLike;
