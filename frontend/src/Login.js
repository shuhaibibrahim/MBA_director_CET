import React, { useEffect, useState } from 'react'
import { auth } from './firebase_config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"

function Login({setUser}) {
    const [hasAccount, setHasAccount] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const login=()=>{
        signInWithEmailAndPassword(auth, email, password)
        .catch((err)=>{
            setError(err.message)
        })
    }

    const signup=()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .catch((err)=>{
            setError(err.message)
        })
    }

    return (
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" required value={email} onChange={e=>{setEmail(e.target.value)}}/>

            <label htmlFor="password">Password</label>
            <input type="password" required value={password} onChange={e=>{setPassword(e.target.value)}}/>
            {error&&<div className="text-red-500">{error}</div>}
            {
                hasAccount?
                (
                    <div>
                        <button onClick={login}>Sign In</button>
                        <p>Dont have an account? <span className="cursor-pointer" onClick={()=>{setHasAccount(!hasAccount)}}>Sign up</span></p>
                    </div>
                )
                :
                (
                    <div>
                        <button onClick={signup}>Sign Up</button>
                        <p>Already have an account? <span className="cursor-pointer" onClick={()=>{setHasAccount(!hasAccount)}}>Sign In</span></p>
                    </div>
                )
            }
        </div>
    )
}

export default Login
