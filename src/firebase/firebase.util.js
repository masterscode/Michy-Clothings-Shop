import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCmoHuIGHcGck7XvgncXegn_qFqEPjsYaM",
    authDomain: "michydb-cc757.firebaseapp.com",
    databaseURL: "https://michydb-cc757.firebaseio.com",
    projectId: "michydb-cc757",
    storageBucket: "michydb-cc757.appspot.com",
    messagingSenderId: "351610930619",
    appId: "1:351610930619:web:80cc96e1af19ce247bf09e",
    measurementId: "G-J2WHWNQDWG"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase; 