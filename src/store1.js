import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

import NotifyReducer from "./reducers/NotifyReducer";
import settingReducer from "./reducers/settingReducer";

const firebaseConfig = {
  apiKey: "AIzaSyBgjcCXAfHHhZNfbiCG_3_kEXaCf_b6Yj4",
  authDomain: "reactclientpanel-8ffce.firebaseapp.com",
  databaseURL: "https://reactclientpanel-8ffce.firebaseio.com",
  projectId: "reactclientpanel-8ffce",
  storageBucket: "reactclientpanel-8ffce.appspot.com",
  messagingSenderId: "333180985449",
  appId: "1:333180985449:web:c3c8aa127d3eced4e402f8",
  measurementId: "G-DMG816B463",
};

//react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
  // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);
// initialize firestore
//const firestore = firebase.firestore();
// const settings = { timestampInSnapshots: true };
// firestore.settings(settings);

//Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: NotifyReducer,
  settings: settingReducer,
});

//check for setting in localstorage
if (localStorage.getItem("settings") == null) {
  const defaultSettings = {
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
    allowRegistration: false,
  };

  //set to localstorage
  localStorage.setItem("settings", JSON.stringify(defaultSettings));
}

const initialState = { settings: JSON.parse(localStorage.getItem("settings")) };

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
