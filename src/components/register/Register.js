import React, {useState, useEffect} from "react";
import {LoginNav} from "../navigation/LoginNav";
import {Header} from "../header/Header";
import {RegisterMain} from "./RegisterMain";

export const Register = ({signUp, user, logOut}) => {
    return (
        <>
            <section className="login">
                <div className="container">
                    <LoginNav user={user} logOut={logOut}/>
                    <Header/>
                    <RegisterMain signUp={signUp} user={user}/>
                </div>
            </section>
        </>
    )
}