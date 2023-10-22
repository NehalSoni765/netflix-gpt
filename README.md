## Setup the project

1. Fork the project
2. Clone project using `git clone https://github.com/<YOUR-USERNAME>/netflix-gpt.git`
3. Install dependencies `npm install`
4. In the root directory create a `.env` file and add the TMDB API KEY and OPENAI API KEY into it.

Example:

```
REACT_APP_OPENAI_KEY=sk-aasdadfsdfasdas234c

REACT_APP_TMDB_API_KEY=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGZhNDRlMzg4NGI2N2RlMTIyODFkNWU0ZTkzYmRmOCIsInN1YiI6IjY1MmY5MTMzZWE4NGM3MDBhZWY0ZDQ3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zbMo332NjwlLdqTFwY3kaPp2eYihs3qLp9kmWryNEWU

```

5. Create a firebase project for web and enable Email/Password Authentication.
6. Inside utils folder -> edit the firebase.js file with your firebase config and also add `export const auth = getAuth();` in the file.

7. To run the server execute `npm run dev`

---

## NetflixGPT Project Flow and Completed Task

- Create react app using: npm create vite
- Configured TailwindCSS
- Header
- Rounting the app
- Login Form
- Signup Form
- Form validation (formik)
- useref Hook
- Firebase Setup
- Deploying our app to production
- Create Signup User Account
- implement SignIn User API
- Created Redux store with userSlice
- Implemented Sign out
- Update Profile
- fetch from TMDB movies
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in redirect/ browse to login page and vice-versa
- Unsubscribe on AuthStateChanged callback
- Add hardcoded values to the constants file
- Register TMDB now playing API and create API KEY and get access token
- Get Data from TMDB
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- create movieSlice
- Update store with movies data
- Planing for mainContainer and secondaryCOntainer
- Fetch Data for Trailer video
- Update Store with Trailer Video
- Embedded the youtube video and make it autoplay and mute
- Tailwind classes to make main Container look awesome
- Build secondary container
- Build movie List,
- Build movie Card
- TMDB Image CDN URL
- custom hook - useNowPLayingMovies,usePopularMovies,useTopRatedMovies,useUpcomingMovies
- GPT search Page
- GPT search bar
- (BONUS) Multi-language Feature in our App
- Gpt Search API Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice added data
- Resused Movie List component to make movie suggestion container
- Memoization - Memoization is used to optimize the performance of functions by caching the results of expensive function calls and reusing those results when the same inputs occur again.
- Added .env file
- Adding .env file to gitignore
- Made our Site Responsive.
- FIX: rectified the GptSearchPage data layer and clear the GptSearchPage when you click the GPT search button

---

## Project Idea Overview

- Login/Sign Up [Firebase User Authentication]

  - Sign In /Sign up Form
  - Redirect to Browse Page

- Browse Page (after authentication)

  - Header
  - Main Movie
    - Main Container
      - Video Title & Description
      - Trailer Video Background
    - Secondary container
      - MovieLists \* N
        - MovieCards \* N

- NetflixGPT
  - Search Bar
  - Movie Suggestions
