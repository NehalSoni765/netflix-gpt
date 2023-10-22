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
- .env key must be `VITE_REACT_APP_..`
- get values from .env file `import.meta.env.VITE_REACT_APP_TMDB_KEY`

## TMDB setup

- go to profile themoviedb.org/settings/profile
- choose API option use API key and documentation
- fetch image url : [url](https://developer.themoviedb.org/docs/image-basics)

# twice api call

- due to strict mode but in prod it will be call once

# get youtube trailer

- filter based on trailer where get an key
  > generate link: https://www.youtube.com/watch?v=inN061MtPOg where key is inN061MtPOg
  - key is movie id
- open link > click on share > click embed and copy-paste into videoBackground

# gpt open API

- with help of GPT plugin BUild Neflix gpt search
- register account in https://platform.openai.com/
- login into chatgpt
- Create API key (strict copy once)
  > click on personal log > API Key (start process for free trieler billing cycle)
- add api key on .env
- create a openai config file into util/openai.jsx
- use into gpt search bar at search click
