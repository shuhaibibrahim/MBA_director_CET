import React, { useEffect, useState } from "react";
import "./App.css";
import TitleSVG from "./TitleSVG";
import Form from "./Form";
import Login from "./Login";
import { auth } from "./firebase_config";

export default function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }, []);

    const logout = () => {
        auth.signOut().then(() => {
            setUser(null);
        });
    };

    return (
        <div className="container bg-gray-100 min-h-screen flex flex-col">
            <header className="bg-white shadow-lg px-20 py-4">
                <div className="w-64">
                    <TitleSVG />
                </div>
            </header>
            {/* <Form user={user} logout={logout} /> */}
            {user ? <Form user={user} logout={logout} /> : <Login setUser={setUser} />}
        </div>
    );
}
