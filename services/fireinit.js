import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var config = {
  apiKey: "AIzaSyC5MMifxu7hyfmdu8g4NJjeVNYlesP39_U",
  authDomain: "ajira-dfff4.firebaseapp.com",
  databaseURL: "https://ajira-dfff4.firebaseio.com",
  projectId: "ajira-dfff4",
  storageBucket: "ajira-dfff4.appspot.com",
  messagingSenderId: "255333306714"
};

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const DB = firebase.database();
export default firebase
