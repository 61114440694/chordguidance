import * as firebase from '.firebase';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDQmo9SmKozurXK7AjMfDO3iJ7Bfjb5bXI",
    authDomain: "ionic-d87be.firebaseapp.com",
    projectId: "ionic-d87be",
    storageBucket: "ionic-d87be.appspot.com",
    messagingSenderId: "81597905452",
    appId: "1:81597905452:web:3a4ca1d6efdc3ca17b2f89",
    measurementId: "G-SCQJVPKQ5F"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };