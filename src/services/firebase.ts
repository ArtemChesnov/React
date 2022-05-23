import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAhWliUQLtPIH7v-NqeUJnzlRocWdaQNf4',
  authDomain: 'che3-fb83e.firebaseapp.com',
  projectId: 'che3-fb83e',
  storageBucket: 'che3-fb83e.appspot.com',
  messagingSenderId: '359281941150',
  appId: '1:359281941150:web:e45da6e7372cbc6396f98f',
};

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);

export const signUp = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const logOut = async () => await signOut(auth);

export const logIn = async (email: string, password: string) =>
  await signInWithEmailAndPassword(auth, email, password);

const db = getDatabase(firebase);

export const userRef = ref(db, 'user');
