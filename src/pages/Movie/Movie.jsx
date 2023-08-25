import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/App.scss';
import { useParams } from 'react-router-dom';
import LogOut from '../../components/LogOut/LogOut';
import NavBar from '../../components/NavBar/NavBar';
import Loader from '../../utils/helpers';
import MovieDescription from '../../components/MovieDescription/MovieDescription';
import { actionGetActor } from '../../store/actions/actions';
import MoviesService from '../../services/MoviesService';
import withAuthorization from '../../HOC/withAuthorization';

const Movie = () => {
  const movieID = useParams();
  const dispatch = useDispatch();
  const movieList = useSelector((store) => store.movieList.movieList);
  const movieDescription = movieList.find((itemMovie) => itemMovie.id === +movieID.movieID);
  const actorDescription = useSelector((store) => store.movieList.actorDescription);
  useEffect(() => {
    dispatch(actionGetActor([MoviesService.fetchActor, movieID.movieID]));
  }, [dispatch, movieID.movieID]);
  const isLoading = useSelector((store) => store.movieList.isLoading);
  const error = useSelector((store) => store.movieList.error);

  return (
    <>
      <LogOut />
      <NavBar />
      {error
      && (
        <h1>
          Error happen :
          {error}
        </h1>
      )}
      {
        isLoading
          ? <Loader />
          : (
            <MovieDescription
              movieDescription={movieDescription}
              actorDescription={actorDescription}
            />
          )
      }
    </>
  );
};

export default withAuthorization(Movie);
