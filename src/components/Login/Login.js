import React from "react";

import "./Login.scss";

import {Header} from "../Header/Header";
import {LoginNav} from "../Navigation/LoginNav";
import {LoginMain} from "./LoginMain";

export const Login = ({signIn, user, logOut}) => {
    const active = true;
    return (
        <>
            <section className="login">
                <div className="container">
                    <LoginNav user={user} logOut={logOut}/>
                    <Header active={active}/>
                    <LoginMain signIn={signIn} user={user}/>
                </div>
            </section>
        </>
    )
}