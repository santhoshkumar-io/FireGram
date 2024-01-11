// Import the functions you need from the SDKs you need
import  firebase from 'firebase/compat/app';
import "firebase/compat/storage";
import "firebase/compat/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_i1X_UdcucrX5X3DGvYFwN4JU1tdfMqk",
  authDomain: "firegram-data.firebaseapp.com",
  projectId: "firegram-data",
  storageBucket: "firegram-data.appspot.com",
  messagingSenderId: "1010103472322",
  appId: "1:1010103472322:web:a4b9155a9cbefbf838eb5b"
};

const app = firebase.initializeApp(firebaseConfig);

// Get Firestore and Storage instances
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();
// Export the instances
export { projectFirestore, projectStorage, timestamp };