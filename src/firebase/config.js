import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// var firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
//     databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
//     projectId: REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: REACT_APP_FIREBASE_APP_ID,
// };

var firebaseConfig = {
    apiKey: 'AIzaSyBycyrY1Fv3jBbkNFQlw87nF3TLfLAj8xE',
    authDomain: 'apptodo-7f07b.firebaseapp.com',
    databaseURL: 'https://apptodo-7f07b.firebaseio.com',
    projectId: 'apptodo-7f07b',
    storageBucket: 'apptodo-7f07b.appspot.com',
    messagingSenderId: '213021884849',
    appId: '1:213021884849:web:38028c24c94365d6e1fd90',
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
