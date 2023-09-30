import axios from 'axios';

// https://api.themoviedb.org/3/movie/now_playing?api_key=2a9eeba8750c26c88972743f518b3444&language=pt-br

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default api;
