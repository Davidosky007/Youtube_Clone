import firebase from "firebase";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_STORAGE_PROJECT_ID,
  storageBucket: "",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

const firebaseInitialized = firebase.initializeApp(config);

const firebaseModules = {
  database: firebaseInitialized.database(),
  auth: firebaseInitialized.auth()
};
export { firebase, firebaseModules };
