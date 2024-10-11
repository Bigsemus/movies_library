import { createSlice } from '@reduxjs/toolkit';
import { actionGetActor, actionGetMovieList } from '../actions/actions';

const movieListSlice = createSlice({
  name: 'movieList',
  initialState: {
    movieList: [],
    movieListForRenderView: [],
    actorDescription: {},
    querySort_ASC_DESC: 'DESC',
    queryInputSearch: '',
    languageValue: '',
    isLoading: true,
    error: null,
  },
  reducers: {
    deleteMovie: (store, action) => {
      // eslint-disable-next-line no-param-reassign
      store.movieList = store.movieList.filter((movie) => movie.id !== action.payload);
    },
    handleMovieRatingChange: (store, action) => {
      // eslint-disable-next-line no-param-reassign
      store.movieList = store.movieList.map((itemMovie) => (
        itemMovie.id === action.payload.movieID
          ? { ...itemMovie, ratingForFilter: action.payload.ratingValue }
          : itemMovie
      ));
    },
    handleMovieLikeChange: (store, action) => {
      // eslint-disable-next-line no-param-reassign
      store.movieList = store.movieList.map((itemMovie) => (
        itemMovie.id === action.payload.movieID
          ? {
            ...itemMovie,
            likeForFilter: (action.payload.value === 'increment')
              ? itemMovie.likeForFilter + 1
              : itemMovie.likeForFilter - 1,
          }
          : itemMovie
      ));
    },
    sortMoviesByQueryButton: (store, action) => {
      let stringQueryASCDESC;
      if (action.payload === 'DESC') {
        stringQueryASCDESC = action.payload;
      } else if (action.payload === 'ASC') {
        stringQueryASCDESC = action.payload;
      } else {
        stringQueryASCDESC = store.querySort_ASC_DESC;
      }
      // eslint-disable-next-line no-param-reassign
      store.querySort_ASC_DESC = stringQueryASCDESC;
      // eslint-disable-next-line no-param-reassign
      store.movieList = store.movieList.sort((first, second) => (
        store.querySort_ASC_DESC === 'DESC'
          ? second[action.payload] - first[action.payload]
          : first[action.payload] - second[action.payload]
      ));
    },
    filterMoviesByQueryInputSearch: (store, action) => {
      const newFilteredState = store.movieList.filter((movie) => movie.title
        .toLowerCase()
        .includes(action.payload.toLowerCase()));
      // eslint-disable-next-line no-param-reassign
      store.queryInputSearch = action.payload;
      // eslint-disable-next-line no-param-reassign
      store.movieListForRenderView = action.payload.length > 0
        ? newFilteredState
        : store.movieList;
    },
    reciteMovie: (store, action) => {
      // eslint-disable-next-line no-param-reassign
      store.movieList = store.movieList.map((itemMovie) => (
        itemMovie.id === action.payload.movieID
          ? {
            ...itemMovie,
            title: action.payload.title,
            poster_path: action.payload.url,
            overview: action.payload.description,
          }
          : itemMovie
      ));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actionGetMovieList.pending, (store) => {
        // eslint-disable-next-line no-param-reassign
        store.isLoading = true;
      })
      .addCase(actionGetMovieList.fulfilled, (store, { payload }) => {
        // eslint-disable-next-line no-param-reassign
        store.movieList = payload.map((itemMovie) => (
          { ...itemMovie, ratingForFilter: 0, likeForFilter: 0 }
        ));
        // eslint-disable-next-line no-param-reassign
        store.movieListForRenderView = store.movieList;
        // eslint-disable-next-line no-param-reassign
        store.isLoading = false;
      })
      .addCase(actionGetMovieList.rejected, (store, { payload }) => {
        // eslint-disable-next-line no-param-reassign
        store.error = payload;
        // eslint-disable-next-line no-param-reassign
        store.isLoading = false;
      })

      .addCase(actionGetActor.pending, (store) => {
        // eslint-disable-next-line no-param-reassign
        store.isLoading = true;
      })
      .addCase(actionGetActor.fulfilled, (store, { payload }) => {
        // eslint-disable-next-line no-param-reassign
        store.actorDescription = payload;
        // eslint-disable-next-line no-param-reassign
        store.isLoading = false;
      })
      .addCase(actionGetActor.rejected, (store, { payload }) => {
        // eslint-disable-next-line no-param-reassign
        store.error = payload;
      });
  },

  // extraReducers: {
  //   [actionGetMovieList.pending]: (store) => {
  //     // eslint-disable-next-line no-param-reassign
  //     store.isLoading = true;
  //   },
  //   [actionGetMovieList.fulfilled]: (store, { payload }) => {
  //     // eslint-disable-next-line no-param-reassign
  //     store.movieList = payload.map((itemMovie) => (
  //       { ...itemMovie, ratingForFilter: 0, likeForFilter: 0 }
  //     ));
  //     // eslint-disable-next-line no-param-reassign
  //     store.movieListForRenderView = store.movieList;
  //     // eslint-disable-next-line no-param-reassign
  //     store.isLoading = false;
  //   },
  //   [actionGetMovieList.rejected]: (store, { payload }) => {
  //     // eslint-disable-next-line no-param-reassign
  //     store.error = payload;
  //     // eslint-disable-next-line no-param-reassign
  //     store.isLoading = false;
  //   },
  //
  //   [actionGetActor.pending]: (store) => {
  //     // eslint-disable-next-line no-param-reassign
  //     store.isLoading = true;
  //   },
  //   [actionGetActor.fulfilled]: (store, { payload }) => {
  //     // eslint-disable-next-line no-param-reassign
  //     store.actorDescription = payload;
  //     // eslint-disable-next-line no-param-reassign
  //     store.isLoading = false;
  //   },
  //   [actionGetActor.rejected]: (store, { payload }) => {
  //     // eslint-disable-next-line no-param-reassign
  //     store.error = payload;
  //   },
  // },
});

export const {
  deleteMovie,
  reciteMovie,
  handleMovieRatingChange,
  handleMovieLikeChange,
  sortMoviesByQueryButton,
  filterMoviesByQueryInputSearch,
} = movieListSlice.actions;
export default movieListSlice.reducer;
