import React, {useState, useEffect} from "react";
import {Header} from "../header/Header";
import {LoginNav} from "../navigation/LoginNav";
import "./Login.scss";
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