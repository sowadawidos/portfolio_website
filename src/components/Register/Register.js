import React, {useState} from "react";

import {LoginNav} from "../Navigation/LoginNav";
import {Header} from "../Header/Header";
import {RegisterMain} from "./RegisterMain";

export const Register = ({signUp, user, logOut}) => {
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
                    <RegisterMain signUp={signUp} user={user} blurFunction={blurFunction}/>
                </div>
            </section>
        </>
    )
}