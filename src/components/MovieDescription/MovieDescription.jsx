import React from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import classes from './MovieDescription.module.scss';
import StarRating from '../StarRating/StarRating';
import { deleteMovie } from '../../store/slices/movieList.slice';
import useTranslation from '../../hooks/useTranslation';

const MovieDescription = (props) => {
  const { actorDescription, movieDescription } = props;
  const urlObj = useRouteMatch();
  const movieID = useParams();
  const dispatch = useDispatch();
  const removeMovie = () => {
    dispatch(deleteMovie(+movieID.movieID));
  };
  return (
    <div className={classes.wrapperDescription}>
      <div className={classes.likeRatingContainerWrap}>
        <h3 className={classes.titleMovie}>{movieDescription.title}</h3>
        <p className={classes.likes}>{`${useTranslation('likes.likes')}: ${movieDescription.likeForFilter}`}</p>
        <StarRating movie={movieDescription} />
        <div className={classes.buttons}>
          <Link to={`${urlObj.url}/edit`}>
            <button
              type="button"
            >
              {useTranslation('buttons.edit')}
            </button>
          </Link>
          <Link to="/movies">
            <button
              type="button"
              className={classes.btnDelete}
              onClick={removeMovie}
            >
              {useTranslation('buttons.delete')}
            </button>
          </Link>
        </div>
      </div>
      <div className={classes.descriptionContainer}>
        <img
          className={classes.poster}
          src={`https://image.tmdb.org/t/p/w300/${movieDescription.poster_path}`}
          alt="poster"
        />
        <p className={classes.releaseDate}>{movieDescription.release_date}</p>

        <p className={classes.actor}>
          <Link to={`${movieDescription.id}/actor`}>
            {`actor: ${actorDescription.name}`}
          </Link>
        </p>

        <p className={classes.overviewMovie}>{movieDescription.overview}</p>
      </div>
    </div>
  );
};

MovieDescription.propTypes = {
  actorDescription: PropTypes.shape({
    name: PropTypes.string,
  }),
  movieDescription: PropTypes.shape({
    title: PropTypes.string,
    likeForFilter: PropTypes.number,
    poster_path: PropTypes.string,
    id: PropTypes.number,
    release_date: PropTypes.string,
    overview: PropTypes.string,
  }),
};

MovieDescription.defaultProps = {
  actorDescription: {},
  movieDescription: {},
};

export default MovieDescription;
