import React, { useEffect, useState } from "react";
import "./App.css";
import TitleSVG from "./TitleSVG";
import Form from "./Form";
import Login from "./Login";
import { auth } from "./firebase_config";
import LoginAdmin from "./LoginAdmin";
import AdminHome from "./AdminHome";

function AdminPanel() {
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
        <div className="App bg-gray-100 min-h-screen flex flex-col">
                    <header className="bg-white shadow-md py-4">
                        <div className="w-11/12 md:w-9/12 m-auto flex justify-between items-center">
                            <div className="w-64">
                                <TitleSVG />
                            </div>
                            {user && (
                                <button
                                    className="btn"
                                    onClick={() => {
                                        logout();
                                    }}
                                >
                                    Logout
                                </button>
                            )}
                        </div>
                    </header>
                    {/* <Form user={user} logout={logout} /> */}
                    {user ? (
                        // <Form user={user} logout={logout} />
                        <AdminHome />
                    ) : (
                        <LoginAdmin
                            setUser={setUser}
                        />
                    )}
                </div>
    )
}

export default AdminPanel
