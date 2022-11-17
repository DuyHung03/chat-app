// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyA0LgBwxW30LE_kXwVgIguadOg2GbyPLuc',
    authDomain: 'chat-app-37146.firebaseapp.com',
    projectId: 'chat-app-37146',
    storageBucket: 'chat-app-37146.appspot.com',
    messagingSenderId: '451002606043',
    appId: '1:451002606043:web:6ed92e2337b54b0c6147fe',
    measurementId: 'G-CQV6S3DP2Y',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
