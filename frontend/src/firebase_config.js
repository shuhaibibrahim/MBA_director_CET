import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyChrQAk8_yg3BqAY5vksz2eORv69wpteak",
  authDomain: "cet-mba-director.firebaseapp.com",
  databaseURL: "https://cet-mba-director-default-rtdb.firebaseio.com",
  projectId: "cet-mba-director",
  storageBucket: "cet-mba-director.appspot.com",
  messagingSenderId: "300315416579",
  appId: "1:300315416579:web:a826a8c95cb445b41c5636"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);