import { createStore, combineReducers } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { firebaseReducer } from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

const initialState = {};

const store = createStore(rootReducer, initialState);

export default store;
