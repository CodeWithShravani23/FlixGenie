export const User_Avatar = "https://avatars.githubusercontent.com/u/6759280?v=4";

export const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_TOKEN}`
  }
};

