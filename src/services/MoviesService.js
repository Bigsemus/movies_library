import axios from 'axios';

function fetchMovieList() {
  return axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d6dbe94d15b75cd469ea39c97c6ec32b');
}

async function fetchActor(movieID) {
  const responseByIdMovie = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=d6dbe94d15b75cd469ea39c97c6ec32b`);
  const responseByActor = await axios.get(`https://api.themoviedb.org/3/person/${responseByIdMovie.data.cast[0].id}?api_key=d6dbe94d15b75cd469ea39c97c6ec32b`);
  return responseByActor.data;
}

const MoviesService = {
  fetchActor,
  fetchMovieList,
};

export default MoviesService;
