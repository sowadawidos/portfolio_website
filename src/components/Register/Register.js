import React, {useState, useEffect} from "react";
import {LoginNav} from "../Navigation/LoginNav";
import {Header} from "../Header/Header";
import {RegisterMain} from "./RegisterMain";

export const Register = ({signUp, user, logOut}) => {
    const active = true;
    return (
        <>
            <section className="login">
                <div className="container">
                    <LoginNav user={user} logOut={logOut}/>
                    <Header active={active}/>
                    <RegisterMain signUp={signUp} user={user}/>
                </div>
            </section>
        </>
    )
}