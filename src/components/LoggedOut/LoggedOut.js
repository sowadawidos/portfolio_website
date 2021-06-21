import React, {useState, useEffect} from "react";
import {LoginNav} from "../navigation/LoginNav";
import {Header} from "../header/Header";
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