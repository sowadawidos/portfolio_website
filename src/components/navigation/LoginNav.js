import React, {useState, useEffect} from "react";
import "./LoginNav.scss"
import {Link} from "react-router-dom";

export const LoginNav = () => {

    return (
        <>
            <div className="login__nav">
                <Link to="/logowanie">
                    <button>Zaloguj</button>
                </Link>
                <Link to="/rejestracja">
                    <button>Załóż konto</button>
                </Link>
            </div>
        </>
    )
}