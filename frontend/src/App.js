import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form";
import Login from "./Login";
import { auth } from './firebase_config';

export default function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
        if (user){
            setUser(user);
        } 
        else{
            setUser(null)
        }
    });
  }, [])

  const logout=()=>{
    auth.signOut()
    .then(() => {
        setUser(null)
    });
  }

  return(
    <>
      {
        user
        ?<Form user={user} logout={logout}/>
        :<Login setUser={setUser}/>
      }
    </>
  )
}
