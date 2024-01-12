import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA6_2abbZS6ubbvUElmYvwF3bHeq5klhpU",
    authDomain: "react-test-ca68e.firebaseapp.com",
    projectId: "react-test-ca68e",
    storageBucket: "react-test-ca68e.appspot.com",
    messagingSenderId: "1084652459560",
    appId: "1:1084652459560:web:12a5900b0429d26b3ac71d",
    measurementId: "G-RHP5QL8HV3"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;