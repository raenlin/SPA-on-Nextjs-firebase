import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCTRchFJpfcqGwKmjlQQFwfn6ikWUEGDb0',
  authDomain: 'cad-exchanger-ca79b.firebaseapp.com',
  projectId: 'cad-exchanger-ca79b',
  storageBucket: 'cad-exchanger-ca79b.firebasestorage.app',
  messagingSenderId: '232699256308',
  appId: '1:232699256308:web:0de4c9119ab9d8d270eda1',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
