import { createAsyncThunk } from '@reduxjs/toolkit';

export const actionGetMovieList = createAsyncThunk(
  'movieList/actionGetMovieList',
  async (args, thunkAPI) => {
    const [fetchMovieList] = args;
    try {
      const response = await fetchMovieList();
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: 'Cannot get movie list :(',
      });
    }
  },
);

export const actionGetActor = createAsyncThunk(
  'movieList/actionGetActor',
  async (args, thunkAPI) => {
    const [fetchActor, movieID] = args;
    try {
      return await fetchActor(movieID);
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: 'Cannot get movie list :(',
      });
    }
  },
);
