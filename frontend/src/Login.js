import React, { useState } from "react";
import { auth } from "./firebase_config";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function Login({ setUser }) {
    const [hasAccount, setHasAccount] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const login = () => {
        signInWithEmailAndPassword(auth, email, password).catch((err) => {
            setError(err.message);
        });
    };

    const signup = () => {
        createUserWithEmailAndPassword(auth, email, password).catch((err) => {
            setError(err.message);
        });
    };

    return (
        <div className="flex-75 flex justify-center items-center">
            <div className="bg-white shadow-md text-center h-fit w-96 p-8 rounded-xl transition-all">
                {/* <h1 className="text-2xl font-bold">MBA Director Application</h1> */}
                {hasAccount ? (
                    <h2 class="text-2xl font-extrabold pb-4">Log in to your account</h2>
                ) : (
                    <h2 class="text-2xl font-extrabold pb-4">Sign up to apply</h2>
                )}
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
                {hasAccount ? (
                    <div>
                        <button className="btn w-full mt-3" onClick={login}>
                            Log In
                        </button>
                        <hr className="mt-6 mb-5" />
                        <p>
                            Dont have an account?{" "}
                            <span
                                className="cursor-pointer text-primary hover:underline hover:text-primary-dark"
                                onClick={() => {
                                    setHasAccount(!hasAccount);
                                }}
                            >
                                Sign up
                            </span>
                        </p>
                    </div>
                ) : (
                    <div>
                        <button className="btn w-full mt-3" onClick={signup}>
                            Sign Up
                        </button>
                        <hr className="mt-6 mb-5" />
                        <p>
                            Already have an account?{" "}
                            <span
                                className="cursor-pointer text-primary hover:underline hover:text-primary-dark"
                                onClick={() => {
                                    setHasAccount(!hasAccount);
                                }}
                            >
                                Log In
                            </span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;
