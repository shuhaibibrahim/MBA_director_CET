import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth"

// apiKey: process.env.REACT_APP_API_KEY,
// authDomain: process.env.REACT_APP_AUTH_DOMAIN ,
// databaseURL: process.env.REACT_APP_DATABASE_URL ,
// projectId: process.env.REACT_APP_PROJECT_ID,
// storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// appId: process.env.REACT_APP_APP_ID
console.log(process)
const firebaseConfig = 
{
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN ,
  // databaseURL: process.env.REACT_APP_DATABASE_URL ,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: pinitializeApprocess.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID
  apiKey: "AIzaSyChrQAk8_yg3BqAY5vksz2eORv69wpteak",
  authDomain: "cet-mba-director.firebaseapp.com",
  databaseURL: "https://cet-mba-director-default-rtdb.firebaseio.com",
  projectId: "cet-mba-director",
  storageBucket: "cet-mba-director.appspot.com",
  messagingSenderId: "300315416579",
  appId: "1:300315416579:web:a826a8c95cb445b41c5636"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);