import React, {useState} from "react";

import "./Login.scss";

import {Header} from "../Header/Header";
import {LoginNav} from "../Navigation/LoginNav";
import {LoginMain} from "./LoginMain";

export const Login = ({signIn, user, logOut}) => {
    const [blur, setBlur] = useState();

    const active = true;
    const blurFunction = modal => {
        setBlur(modal);
    }

    return (
        <>
            <section className="login" style={blur ? {filter: "blur(4px)"} : {}}>
                <div className="container">
                    <LoginNav user={user} logOut={logOut}/>
                    <Header active={active}/>
                    <LoginMain signIn={signIn} user={user} blurFunction={blurFunction}/>
                </div>
            </section>
        </>
    )
}