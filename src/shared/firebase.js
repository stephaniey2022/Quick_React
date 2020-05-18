import firebase from 'firebase/app'
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBAfsJBGvNgBvmLKQceF0GO9MsV3jPLoWU",
    authDomain: "quickreact-ae519.firebaseapp.com",
    databaseURL: "https://quickreact-ae519.firebaseio.com",
    projectId: "quickreact-ae519",
    storageBucket: "quickreact-ae519.appspot.com",
    messagingSenderId: "174393878259",
    appId: "1:174393878259:web:decd782a482e882a1fb986",
    measurementId: "G-W3BNVDJHQ3"
  };
  firebase.initializeApp(firebaseConfig)

export default firebase;