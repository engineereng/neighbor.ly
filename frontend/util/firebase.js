import firebase from 'firebase/app';
require('firebase/auth')

const firebaseConfig = {
  apiKey: "AIzaSyBrTPpRANMQbfrYY8Nvfzy_4zq2qj2-FUo",
  authDomain: "neighborly-1e4b9.firebaseapp.com",
  projectId: "neighborly-1e4b9",
  storageBucket: "neighborly-1e4b9.appspot.com",
  messagingSenderId: "374687139669",
  appId: "1:374687139669:web:ac8b7b5eb59b23178091dc",
  measurementId: "G-5WY20T76ZQ"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export const auth = firebase.auth
console.log(auth)

export default firebase;