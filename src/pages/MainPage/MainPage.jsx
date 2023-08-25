import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../../utils/helpers';
import MovieList from '../../components/MovieList';
import MovieFilter from '../../components/MovieFilter';
import LogOut from '../../components/LogOut/LogOut';
import LangBtn from '../../components/LangBtn';
import withAuthorization from '../../HOC/withAuthorization';

const MainPage = () => {
  const movieListForRenderView = useSelector((store) => store.movieList.movieListForRenderView);
  const error = useSelector((store) => store.movieList.error);
  const isLoading = useSelector((store) => store.movieList.isLoading);
  return (
    <>
      <MovieFilter />
      <LogOut />
      <LangBtn />
      <div>
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
              <MovieList
                movieList={movieListForRenderView}
              />
            )
        }
      </div>
    </>
  );
};

export default withAuthorization(MainPage);
