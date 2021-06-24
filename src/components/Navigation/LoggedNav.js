import React, {useState, useEffect} from "react";
import "./LoginNav.scss"
import {Link} from "react-router-dom";

export const LoggedNav = ({user, logOut}) => {
    return (
        <>
            <div className="login__nav">
                <span className="user">
                    Cześć, {user.email}!
                </span>
                <Link to="/oddaj-rzeczy">
                    <button>Oddaj rzeczy</button>
                </Link>
                <Link to="/wyloguj">
                    <button onClick={logOut}>Wyloguj</button>
                </Link>
            </div>
        </>
    )
}