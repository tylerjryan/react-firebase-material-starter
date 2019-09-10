# React Firebase Material Starter

A full-stack web application starter template that extends [Create React App](https://facebook.github.io/create-react-app/docs/getting-started) and includes the following:

- ReactJS
- React Router
- Authentication and Authorization
- Firebase
- Social Sign On
- Material-UI
- JSS
- Dev/prod configuration
- ESLint configuration

---

## Getting Started

The intended usage of this repo is to clone it as a starting point for a new project.

Here are the recommended getting started steps:

1. Clone the repo
2. Delete the `/.git` folder
3. (optional) Initialize git for the new project and create your initial commit
4. Install node_modules using `yarn`
5. Run the app
6. Configure Firebase deployments for dev/prod
7. Deploy app to Firebase Hosting

Here are those steps written out in a single flow:

```bash
git clone git@github.com:tylerjryan/react-firebase-material-starter.git <project-name>
cd <project-name>
rm -rf .git
git init
git add .
git commit -m "Initial commit from React Firebase Material Starter"
yarn
yarn start
```

Running `yarn start` will start a development server and open the app at [http://localhost:3000](http://localhost:3000).

You can play with the app and see that it is fully functional and include a nice starter design that is mobile responsive, utilizes several of Material-UI's components, and contains some example routes using React Router.

When you are done, close the dev server using `ctrl+c`.

### Configure Firebase deployments for dev/prod

To deploy our app, we need to connect our project to Firebase. We will setup **seperate** projects in Firebase for Development and Production. This will ensure that the environements are completely isolated from each other. But because Firebase allows for full configuration using local files, we can ensure that the deployments are equivalent very easily.

Note that this repo only contains Hosting configuration. You will need to do your own setup to enable other Firebase services such as Firestore and Storage.

#### Create Development and Production Firebase Projects

Go to the [Firebase Console](https://console.firebase.google.com) and create two projects: one for development and one for production. I recommend a naming convention like this: `My App - DEV` and `My App - PROD`.

This will result in the create of two projects with the IDs: `my-app-dev` and `my-app-prod`

We will need these IDs for our local `.firebaserc` configuration.

#### Configure `.firebaserc`

The `.firebaserc` file is used to tell the Firebase CLI which Firebase projects your app is associated with. It allows for the definition of aliases to make it very easy to switch between dev and prod environments.

Set the default environment to be the development project and create aliases for both dev and prod like this:

`.firebaserc`

```json
{
  "projects": {
    "default": "FIREBASE-PROJECT-ID-DEV",
    "dev": "FIREBASE-PROJECT-ID-DEV",
    "prod": "FIREBASE-PROJECT-ID-PROD"
  }
}
```

Replace `FIREBASE-PROJECT-ID-DEV` with your dev project ID such as `my-app-dev` and `FIREBASE-PROJECT-ID-PROD` with your prod project ID such as `my-app-prod`.

#### Configure Environment Variables

Your Firebase environment is defined by environment variables that are used to configure the Firebase instance in the app.

There are 2 environment variable configuration files included in the project: `.env.development` and `.env.production`

These files are gitignored and you should NOT commit these to version control. They were just included in this repo for your convenience.

Populate these two files with your configuration values for the Dev and Prod Firebase projects, respectively. You can find these values in the Firebase Console project settings. Under the General tab, click *Add Firebase to your web app* and you'll see a snippet that looks like this:

```html
<script src="https://www.gstatic.com/firebasejs/5.7.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "my-app-dev.firebaseapp.com",
    databaseURL: "https://my-app-dev.firebaseio.com",
    projectId: "my-app-dev",
    storageBucket: "my-app-dev.appspot.com",
    messagingSenderId: "12345678900"
  };
  firebase.initializeApp(config);
</script>
``` 

The part we care about are the key/value pairs inside the `config` object.

Open `.env.development` and paste in the values for your DEV Firebase project:

`.env.development`

```
REACT_APP_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
REACT_APP_AUTH_DOMAIN=my-app-dev.firebaseapp.com
REACT_APP_DATABASE_URL=https://my-app-dev.firebaseio.com
REACT_APP_PROJECT_ID=my-app-dev
REACT_APP_STORAGE_BUCKET=my-app-dev.appspot.com
REACT_APP_MESSAGING_SENDER_ID=12345678900
```

Do the same thing for your production configuration:

`.env.production`

```
REACT_APP_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
REACT_APP_AUTH_DOMAIN=my-app-prod.firebaseapp.com
REACT_APP_DATABASE_URL=https://my-app-prod.firebaseio.com
REACT_APP_PROJECT_ID=my-app-prod
REACT_APP_STORAGE_BUCKET=my-app-prod.appspot.com
REACT_APP_MESSAGING_SENDER_ID=12345678900
```

**NOTE: Remember, these configuration files are gitignored for a reason. Do NOT commit them!**

### Deploy app to Firebase Hosting

Before continuing, ensure that you have the Firebase CLI node module installed globally:

```bash
npm install -g firebase-tools
```

You can switch between active Firebase projects using the Firebase CLI and the aliases defined in `.firebaserc`.

```bash
firebase use <alias>

### Just to be explicit, let's use the `dev` project for now.
firebase use dev
### this is equivalent to:
firebase use default

### You can also list available aliases:
firebase use
```

Now that you have the dev project selected, build the app and deploy it to Firebase Hosting using the `yarn shipit` script defined in `package.json` [see full list of scripts](#available-scripts).

```bash
### The :dev ensures that your DEV environment variables are used on deployment
yarn shipit:dev

### Note that this is equivalent to:
yarn build:dev
yarn deploy
### OR
yarn build:dev
firebase deploy
```

You should see something like this in your terminal output:

```bash
12:01 $ yarn shipit:dev
yarn run v1.12.3
$ yarn build:dev; yarn deploy
$ REACT_APP_ENV=development yarn build:env
$ sh -ac '. .env.${REACT_APP_ENV}; react-scripts build'
Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  308.62 KB  build/static/js/1.ef4eb676.chunk.js
  3.24 KB    build/static/js/main.0203f43e.chunk.js
  763 B      build/static/js/runtime~main.229c360f.js

The project was built assuming it is hosted at the server root.
You can control this with the homepage field in your package.json.
For example, add this to build it for GitHub Pages:

  "homepage" : "http://myname.github.io/myapp",

The build folder is ready to be deployed.
You may serve it with a static server:

  yarn global add serve
  serve -s build

Find out more about deployment here:

  http://bit.ly/CRA-deploy

$ firebase deploy

=== Deploying to 'instagram-audit-dev'...

i  deploying hosting
i  hosting[instagram-audit-dev]: beginning deploy...
i  hosting[instagram-audit-dev]: found 12 files in build
✔  hosting[instagram-audit-dev]: file upload complete
i  hosting[instagram-audit-dev]: finalizing version...
✔  hosting[instagram-audit-dev]: version finalized
i  hosting[instagram-audit-dev]: releasing new version...
✔  hosting[instagram-audit-dev]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/instagram-audit-dev/overview
Hosting URL: https://instagram-audit-dev.firebaseapp.com
✨  Done in 43.27s.
```

At the end of the output, you will see a `Hosting URL`. Open that URL in your browser and BOOM! The app is deployed.

How easy is that?!?

If you would like to deploy the app to the production environment as well, this is all it takes:

```bash
### Switch to the production Firebase project
firebase use prod
### Ship the app using the prod environement variables
yarn shipit:prod
```

You will similar very similar output to your dev deployment and you can once again click on the `Hosting URL` to see the deployed app.

---

## Start Developing!

You are now fully configured to build a full-stack web application using an incredibly powerful stack of tools, with a dev/prod split included.

Start up the dev server and start developing with hot reload and linting ready to go!:

```bash
yarn start
```

Ready? Go!

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn build:dev`

Runs `yarn build` using the environment variables defined in `.env.development`. This allows for a development build to be fully deployed on Firebase. 

### `yarn build:prod`

Runs `yarn build` using the environment variables defined in `.env.production`. This allows for a production build to be fully deployed on Firebase.

### `yarn shipit`

Build and deploy the app to the production Firebase environment.

### `yarn shipit:dev`

Build and deploy the app to the development Firebase environment.

### `yarn shipit:prod`

Same as `yarn shipit`.

### `yarn deploy`

Deploy the current built app in the `/build` folder to Firebase.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

### Create React App

Create React App provided the original starter template for React Firebase Material Starter, and was used as the foundation of this project. You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

### ReactJS

ReactJS is the User Interface Framework upon which the application is built. To learn React, check out the [React documentation](https://reactjs.org/).

### Firebase

Firebase is setup to provide the backend for the application. To learn more about Firebase, check out Google's [Firebase Documentation](https://firebase.google.com/docs)

### Material-UI

The React UI Component Library built on Google's Material Design. It provides an extensive set of components and theming capabilites that greatly simplify the process of building a high-quality, responsive application. To learn more, check out the [documentation](https://material-ui.com/).

### Additional Information

The code located in `/src/components/Firebase/` and `/src/components/Session/` was based on [A Firebase in React Tutorial for Beginners](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial) tutorial by Robin Wieruch. This is a fantastic tutorial for understanding how to use Firebase with ReactJS, while learning more about ReactJS in the process.
