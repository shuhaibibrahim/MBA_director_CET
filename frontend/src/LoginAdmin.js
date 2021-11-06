import React, { useState } from "react";
import { auth } from "./firebase_config";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function LoginAdmin({ setUser }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const login = () => {
        signInWithEmailAndPassword(auth, email, password).catch((err) => {
            setError(err.message);
        });
    };

    return (
        <div className="flex-75 flex justify-center items-center">
            { (
                <div className="bg-white shadow-md text-center h-fit w-96 p-8 rounded-xl">
                    <p className="mb-4 font-bold">Admin Login</p>
                    <label className="form-label mb-1" htmlFor="email">
                        Email address
                    </label>
                    <input
                        className="form-control block w-full mb-3"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />

                    <label className="form-label mb-1" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="form-control block w-full mb-3"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    {error && <div className="text-red-600">{error}</div>}
                    <div>
                        <button className="btn w-full mt-3" onClick={login}>
                            Log In
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LoginAdmin;
