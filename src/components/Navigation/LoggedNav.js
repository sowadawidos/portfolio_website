import React from "react";
import {Link} from "react-router-dom";

import "./LoginNav.scss"


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