import * as firebase from 'firebase';
import 'firebase/auth';
var firebaseConfig = {
  apiKey: "AIzaSyAeJeXRk-n3GsxfcbQyIBm_Os4q7pNgkBw",
  authDomain: "congressional-app-86a87.firebaseapp.com",
  databaseURL: "https://congressional-app-86a87.firebaseio.com",
  projectId: "congressional-app-86a87",
  storageBucket: "congressional-app-86a87.appspot.com",
  messagingSenderId: "365593416787",
  appId: "1:365593416787:web:bda9b01e2cb730d0bfe2a6"
};
firebase.initializeApp(firebaseConfig);
 var database = firebase.database();
 export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
