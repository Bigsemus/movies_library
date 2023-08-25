import React from 'react';
import { useSelector } from 'react-redux';
import LogOut from '../../components/LogOut/LogOut';
import NavBar from '../../components/NavBar';
import Loader from '../../utils/helpers';
import FormikMovie from '../../components/FormikMovie/FormikMovie';
import withAuthorization from '../../HOC/withAuthorization';

const EditMovie = () => {
  const isLoading = useSelector((store) => store.movieList.isLoading);
  const error = useSelector((store) => store.movieList.error);

  return (
    <>
      <LogOut />
      <NavBar />
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
          : <FormikMovie />
      }
    </>
  );
};

export default withAuthorization(EditMovie);
