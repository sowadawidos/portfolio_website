import React from "react";

import {LoginNav} from "../Navigation/LoginNav";
import {Header} from "../Header/Header";
import {LoggedOutMain} from "./LoggedOutMain";

export const LoggedOut = ({user, logOut}) => {
    return (
        <>
            <section className="login">
                <div className="container">
                    <LoginNav user={user} logOut={logOut}/>
                    <Header/>
                    <LoggedOutMain/>
                </div>
            </section>
        </>
    )
}