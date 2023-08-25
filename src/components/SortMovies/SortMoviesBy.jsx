import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import classes from './SortMoviesBy.module.scss';
import { sortMoviesByQueryButton } from '../../store/slices/movieList.slice';
import useTranslation from '../../hooks/useTranslation';

const cx = classNames.bind(classes);

const SortMoviesBy = () => {
  const dispatch = useDispatch();
  const defaultIsActiveSortBY = {
    isButtonByLikeActive: false,
    isButtonByRatingActive: false,
  };
  const defaultIsActiveSortAscDesc = {
    isButtonAscActive: false,
    isButtonDescActive: false,
  };
  const [valueSortBY, setValueSortBY] = useState(defaultIsActiveSortBY);
  const [valueSortAscDesc, setValueSortAscDesc] = useState(defaultIsActiveSortAscDesc);
  const btnByLike = cx('btnSortBY', {
    active: valueSortBY.isButtonByLikeActive,
  });
  const btnByRating = cx('btnSortBY', {
    active: valueSortBY.isButtonByRatingActive,
  });
  const btnAsc = cx('btnAscDesc', {
    active: valueSortAscDesc.isButtonDescActive,
  });
  const btnDesc = cx('btnAscDesc', {
    active: valueSortAscDesc.isButtonAscActive,
  });
  const handleActiveButton = (value) => {
    switch (value) {
      case 'likeForFilter':
        setValueSortBY({ ...defaultIsActiveSortBY, isButtonByLikeActive: true });
        break;
      case 'ratingForFilter':
        setValueSortBY({ ...defaultIsActiveSortBY, isButtonByRatingActive: true });
        break;
      case 'DESC':
        setValueSortAscDesc({ ...defaultIsActiveSortAscDesc, isButtonDescActive: true });
        break;
      case 'ASC':
        setValueSortAscDesc({ ...defaultIsActiveSortAscDesc, isButtonAscActive: true });
        break;
      default:
        setValueSortBY(defaultIsActiveSortBY);
        setValueSortAscDesc(defaultIsActiveSortAscDesc);
    }
  };
  return (
    <div
      className={classes.wrapSorters}
      role="button"
      tabIndex={0}
      onMouseDown={(event) => {
        dispatch(sortMoviesByQueryButton(event.target.value));
        handleActiveButton(event.target.value);
      }}
    >
      <div className={classes.wrapSort_BY}>
        <button
          className={btnByLike}
          type="button"
          value="likeForFilter"
        >
          {useTranslation('sort-by.like')}
        </button>
        <button
          className={btnByRating}
          type="button"
          value="ratingForFilter"
        >
          {useTranslation('sort-by.rating')}
        </button>
      </div>
      <div className={classes.wrapSort_ASC_DESC}>
        <button
          className={btnAsc}
          type="button"
          value="DESC"
        >
          DESC
        </button>
        <button
          className={btnDesc}
          type="button"
          value="ASC"
        >
          ASC
        </button>
      </div>
    </div>
  );
};

export default SortMoviesBy;
