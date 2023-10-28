# Netflix GPT

## Project Overview

Netflix GPT is a web-based application that combines the convenience of a streaming platform with the power of GPT-3, providing an enhanced entertainment experience. Here's an overview of its key features and a flow of completed tasks:

[Live Demo](https://netflix-gpt-7e4d7.web.app/)

## Features

### Authentication

- **Login/Sign Up**: The app features a user-friendly sign-in and sign-up form with Firebase integration for secure authentication.
- **Form Validation**: Formik is used to ensure data accuracy.

### Homepage

- **Header**: A dynamic header showcases essential elements, including a hamburger menu, a Netflix logo, and a real-time search box with optimized searching via debouncing.
- **Main Movie**: The main attraction is a movie trailer with the movie's title and description.
- **Secondary Container**: This section lists popular, trending, and upcoming movies for a broad selection of content.

### User Account

- **Sign Out**: Users who are signed in can log out with a simple "Sign Out" button in the header.
- **GPT-Powered Search**: A GPT-3-powered search feature assists users in discovering content more efficiently.

### Movie Search

- **Multi-Language Support**: The header provides language options that dynamically update the search input and button according to the user's language choice.
- **GPT Movie Search**: OpenAI's API is integrated for movie search results. Users can search for a movie, and the app presents movie categories for an improved browsing experience.

## Tech Stack

The app is built using a robust tech stack:

- Firebase: User authentication and management
- Formik: Form validation for data accuracy
- GPT-3: Enhances search capabilities and user interaction
- Dynamic Content Loading: Ensures a responsive user experience
- Multi-Language Support: For a global audience
- TMDB API: Provides movie data for a rich viewing experience

## Project Setup

1. **Fork the Project**: Fork the repository to your own GitHub account.
2. **Clone the Project**: Clone the project to your local machine using `git clone`.
3. **Install Dependencies**: Run `npm install` to install the necessary project dependencies.
4. **Create a .env File**: In the root directory, create a `.env` file and add the TMDB API KEY and OPENAI API KEY.
5. **Firebase Configuration**: Configure Firebase by updating the `firebase.js` file with your Firebase project settings.
6. **Start the Server**: Run the server with `npm run dev`.

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


## NetflixGPT Project Flow Task

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

