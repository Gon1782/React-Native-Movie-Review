import axios from "axios";

export const getPopularMovies = async () => {
  const { data } = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=7fffdc60299b51d13e68da453255da2d&language=ko-KR");
  return data;
};

export const getTopRatedMovies = async () => {
  const { data } = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=7fffdc60299b51d13e68da453255da2d&language=ko-KR");
  return data;
};

export const getUpcommingMovies = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=7fffdc60299b51d13e68da453255da2d&language=ko-KR&page=${pageParam}`);
  return data;
};
