import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailer = action.payload;
    },
  },
});
export const {
  addPopularMovies,
  addNowPlayingMovies,
  addTrailerVideo,
  addTopRatedMovies,
  addUpcomingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
