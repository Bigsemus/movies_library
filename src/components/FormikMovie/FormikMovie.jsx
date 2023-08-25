import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Link, Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useTranslation from '../../hooks/useTranslation';
import { reciteMovie } from '../../store/slices/movieList.slice';
import classes from './FormikMovie.module.scss';

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length > 10) {
    errors.title = 'Must be 10 characters or less';
  }

  if (!values.description) {
    errors.description = 'Required';
  } else if (values.description.length < 20) {
    errors.description = 'Must be 20 characters or higher';
  }

  return errors;
};

const FormikMovie = () => {
  const movieID = useParams();
  const dispatch = useDispatch();
  const movieList = useSelector((store) => store.movieList.movieList);
  const movieRecite = movieList.find((itemMovie) => itemMovie.id === +movieID.movieID);
  const [dispatched, setDispatched] = useState(false);
  const formik = useFormik({
    initialValues: {
      title: `${movieRecite.title}`,
      url: `https://image.tmdb.org/t/p/w200/${movieRecite.poster_path}`,
      description: `${movieRecite.overview}`,
    },
    validate,
    onSubmit: (values) => {
      const valuesForAction = {
        ...values,
        movieID: +movieID.movieID,
      };
      dispatch(reciteMovie(valuesForAction));
      setDispatched(true);
    },
  });
  return (
    <div className={classes.wrapRecite}>

      <form onSubmit={formik.handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.errors.title ? <div>{formik.errors.title}</div> : null}

        <input
          type="url"
          name="url"
          placeholder="url"
          onChange={formik.handleChange}
          value={formik.values.url}
        />
        {formik.errors.url ? <div>{formik.errors.url}</div> : null}

        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {dispatched && <Redirect to="/movies" />}
        {formik.errors.description ? <div>{formik.errors.description}</div> : null}

        <div>
          <button type="submit">
            {useTranslation('buttons.submit')}
          </button>
          <Link to={`/movies/${+movieID.movieID}`}>
            <button type="button">
              {useTranslation('buttons.back')}
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FormikMovie;
