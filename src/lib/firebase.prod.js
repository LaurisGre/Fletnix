import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCBHzTl0XPCufvguzvAc_e4E46EY3oVWr0",
    authDomain: "fletnix-8bfc8.firebaseapp.com",
    projectId: "fletnix-8bfc8",
    storageBucket: "fletnix-8bfc8.appspot.com",
    messagingSenderId: "185841280439",
    appId: "1:185841280439:web:cb963f719cc9b3fa59f432"
};

const firebase = Firebase.initializeApp(config);

export { firebase };