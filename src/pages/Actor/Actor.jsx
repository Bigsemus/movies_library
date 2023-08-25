import React, { useEffect } from 'react';
import '../../styles/App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../../utils/helpers';
import ActorDescription from '../../components/ActorDescription/ActorDescription';
import LogOut from '../../components/LogOut/LogOut';
import NavBar from '../../components/NavBar';
import { actionGetActor } from '../../store/actions/actions';
import MoviesService from '../../services/MoviesService';
import LangBtn from '../../components/LangBtn/LangBtn';
import withAuthorization from '../../HOC/withAuthorization';

const Actor = () => {
  const movieID = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.movieList.isLoading);
  const error = useSelector((store) => store.movieList.error);
  const actorDescription = useSelector((store) => store.movieList.actorDescription);
  useEffect(() => {
    dispatch(actionGetActor([MoviesService.fetchActor, movieID.movieID]));
  }, [dispatch, movieID.movieID]);
  return (
    <>
      <LogOut />
      <NavBar />
      <LangBtn />
      {error
      && (
        <h1>
          Error happen:
          {error}
        </h1>
      )}
      {
        isLoading
          ? <Loader />
          : (
            <ActorDescription
              actorDescription={actorDescription}
            />
          )
      }
    </>
  );
};

export default withAuthorization(Actor);
