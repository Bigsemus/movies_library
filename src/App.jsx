import React, { useEffect } from 'react';
import './styles/App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Routes from './Routes/Routes';
import { actionGetMovieList } from './store/actions/actions';
import { filterMoviesByQueryInputSearch } from './store/slices/movieList.slice';
import MoviesService from './services/MoviesService';
import LangBtn from './components/LangBtn';
import useTranslation from './hooks/useTranslation';

const App = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((store) => store.movieList.movieList);
  const queryInputSearch = useSelector((store) => store.movieList.queryInputSearch);
  useEffect(() => {
    dispatch(actionGetMovieList([MoviesService.fetchMovieList]));
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterMoviesByQueryInputSearch(queryInputSearch));
  }, [movieList, dispatch, queryInputSearch]);

  return (
    <div className="App">
      <div className="header">
        <LangBtn />
        <p>{useTranslation('header.sort-movies')}</p>
      </div>
      <Router>
        <Routes />
      </Router>

      <div className="footer">
        <p>{useTranslation('footer.footer')}</p>
      </div>
    </div>
  );
};

export default App;
