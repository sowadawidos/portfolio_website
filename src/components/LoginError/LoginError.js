import React, { useState, useEffect } from "react"
import "./LoginError.scss";

export const LoginError = ({code, setLoginError}) => {
    const [message, setMessage] = useState();

    useEffect(() => {
        if (code === "auth/wrong-password") {
            setMessage("Podane hasło jest błędne!")
        }
        if (code === "auth/user-not-found") {
            setMessage("Podany identyfikator użytkownika nie istnieje")
        }
        if (code === "auth/too-many-requests") {
            setMessage("Za dużo prób logowania, spróbuj później")
        }
        if (code === "auth/email-already-in-use") {
            setMessage("Ten identyfikator użytkownika jest już w użyciu")
        }
    }, [code])

    return (
        <>
            <section className="login__error">
                <div className="container">
                    <h1 className="message">{message}</h1>
                    <button onClick={() => setLoginError("")}>Cofnij</button>
                </div>
            </section>
        </>
    )
}