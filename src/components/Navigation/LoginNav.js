import React from "react";
import {Link} from "react-router-dom";

import {LoggedNav} from "./LoggedNav";

import "./LoginNav.scss"


export const LoginNav = ({user, logOut}) => {
    return (
        <>

            {
                user ? <LoggedNav user={user} logOut={logOut}/> :
                    <div className="login__nav">
                        <Link to="/logowanie">
                            <button>Zaloguj</button>
                        </Link>
                        <Link to="/rejestracja">
                            <button>Załóż konto</button>
                        </Link>
                    </div>
            }
        </>
    )
}