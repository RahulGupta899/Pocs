// For setting up firebase
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import secret from './secrets';

let app = initializeApp(secret);

// for Authentication
export let auth = getAuth(app);

// for firestore Database
export const db = getFirestore(app);
