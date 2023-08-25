import { configureStore } from '@reduxjs/toolkit';
import movieListSlice from './slices/movieList.slice';

const customMiddleWare = () => (next) => (action) => {
  if ((action) && process.env.NODE_ENV !== 'production') { // eslint-disable-next-line
    console.log('Action triggered:', action);
  }
  next(action);
};

export default configureStore({
  reducer: {
    movieList: movieListSlice,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    // logger,
    customMiddleWare,
  ],
});
