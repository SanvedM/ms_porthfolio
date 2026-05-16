import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
 apiKey:"xxxxx",
 authDomain:"xxxxx",
 projectId:"aweb-88a61",
 storageBucket:"xxxxx",
 messagingSenderId:"xxxxx",
 appId:"xxxxx"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);