export const User_Avatar = "https://avatars.githubusercontent.com/u/6759280?v=4";

// export const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';

// export const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_TOKEN}`
//   }
// };
// console.log("TOKEN:", process.env.REACT_APP_TMDB_API_TOKEN);

// export const url ='https://api.themoviedb.org/3/movie/now_playing?page=1';
export const url= "https://tmdb-wrapper-xi.vercel.app/api/tmdb-proxy/?path=/movie/now_playing&language=en-US&page=1"
export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjI2MjEzY2Q3ZjllZjRlOWI2MWU3NGRhZTQzYmRlNiIsIm5iZiI6MTc1MTk4Njc1OS44MjMsInN1YiI6IjY4NmQzMjQ3ODFiNDY2NzUzNjU0MDQ4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B8GK-5bPoCG5rCkiQT6f3cJBxQSTGTXQxbqo5eygWXI'
  }
};
export const Vdourl = 'https://api.themoviedb.org/3/movie/552524/videos?language=en-US';
export const imgUrl="https://image.tmdb.org/t/p/w200";

export const popurl="https://tmdb-wrapper-xi.vercel.app/api/tmdb-proxy/?path=/movie/popular&language=en-US&page=1"
export const upurl="https://tmdb-wrapper-xi.vercel.app/api/tmdb-proxy/?path=/movie/upcoming&language=en-US&page=1"
export const topurl="https://tmdb-wrapper-xi.vercel.app/api/tmdb-proxy/?path=/movie/top_rated&language=en-US&page=1"


