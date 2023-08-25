import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import classes from './TitleMovieForDescription.module.scss';

const TitleMovieForDescription = (props) => {
  const { url } = useRouteMatch();
  return (
    <Link to={`${url}/${props.movie.id}`}>
      <button
        type="button"
        className={classes.titleContent}
      >
        {props.movie.title}
      </button>
    </Link>
  );
};

TitleMovieForDescription.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};

export default TitleMovieForDescription;
