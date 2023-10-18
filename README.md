# NETFLIX GPT

- Create react app using: npm create vite
- Configured TailwindCSS
- Header
= Login Form
- Form validation (formik)
- useref 
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

## Features

- Login/Signup 
    - Sign In/Sing Up Form
    - redirect to Browse Page
- Browse(after auth)
    - Header
    - Main Movie
        - Tailer in Background
        - Title and description
        - Movie Suggestions
            - Movie List & vertical scrollable 
- NetflixGPT
    - Search Bar
    - Movie Suggestions

## FireBase Setup

- create a web app in firebase
- sign in methods enable email and password (make sure cors extension desable)
- click project review on left side bar 
- click on newly created web app setting icon
- scroll down copy firebase code and paste into current src/utils/firebase.jsx
- open the terminal.
- click window and search as powershell 
- right click on run as administrator 
    > (PS C:\WINDOWS\system32> Set-ExecutionPolicy Bypass)
    > press y
- Hit Command firebase login
- Hit Command firebase init hosting
    ? Please select an option: Use an existing project
    ? Select a default Firebase project for this directory: netflix-gpt-e408b (NetflixGPT)
    ? What do you want to use as your public directory? build
    ? Configure as a single-page app (rewrite all urls to /index.html)? No
    ? Set up automatic builds and deploys with GitHub? No
    ? File dist/index.html already exists. Overwrite? No
- firebase deploy ("https://netflix-gpt-e408b.web.app")

## Authentication Firebase 

- Go to firebase documentation and search authentication firebase
- on left panel click on web 
    > click password Authentication (choose always firebase web modular)
- to do dispatch again written 
    > click on manage users which on left panel

## Quick URL
- check users - https://console.firebase.google.com/project/netflix-gpt-e408b/authentication/users
- firebase project url = https://console.firebase.google.com/project/netflix-gpt-e408b/overview
- firebase documentaion url = https://firebase.google.com/docs/auth/web/manage-users?hl=en

## TMDB setup
 
- go to profile themoviedb.org/settings/profile 
    - choose API option use API key and documentation