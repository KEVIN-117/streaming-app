# StreamingApp

this is a simple streaming app example using Angular and firebase

## Development server

### Installation Dependencies

```bash
npm install
# o
yarn install
```

### Run the app

```bash
npm run start
# o
yarn start
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Run Storybook

```bash
npm run storybook
# o
yarn storybook
```

Navigate to `http://localhost:6006/`. The app will automatically reload if you change any of the source files.

## Technologies

- Angular 17: for the frontend
- Firebase: for integrate authentication, database and storage
- SCSS: for styling
- Tailwind CSS: for styling
- HTML: for the frontend
- Typescript: for the backend
- RxJS: for reactive programming
- Storybook: for component documentation



## For production in Firebase

### Build the app

```bash
npm run build
# o
yarn build
```

### Deploy the app

```bash
firebase deploy
```

### previously steps to deploy


#### init firebase
```bash
firebase init
```

#### select hosting
```bash
? What do you want to use as your public directory? dist/streaming-app
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
? File dist/streaming-app/index.html already exists. Overwrite? No
```

#### deploy
```bash
firebase deploy
```

### Other options with deploy yor app

- [Netlify](https://www.netlify.com/)

For deploy your app in Netlify you need to create an account and follow the steps to deploy your app, and upload your code to github or gitlab.


### Thanks for reading

I hope you enjoy this example of a streaming app using Angular and Firebase. If you have any questions, please let me know. I will be happy to help you.
