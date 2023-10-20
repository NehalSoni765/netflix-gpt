export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR =
  "https://occ-0-4345-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_REACT_APP_TMDB_KEY,
  },
};
export const TOP_RATED_API = "https://api.themoviedb.org/3/movie/top_rated";
export const UPCOMING_API = "https://api.themoviedb.org/3/movie/upcoming";
export const POPULAR_MOVIES_API = "https://api.themoviedb.org/3/movie/popular";
export const MOVIE_NOW_PLAYING =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const MOVIE_VIDEO_API =
  "https://api.themoviedb.org/3/movie/movie_id/videos";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";
