import React, {useState, useEffect} from "react";
import {LoginNav} from "../Navigation/LoginNav";
import {Header} from "../Header/Header";
import {Main} from "./Main";
import "./Hero.scss";

export const Hero = ({active, user, logOut}) => {
    return (
        <>
            <section className="first__look" id="menu">
                <div className="first__look-img"/>
                <div className="first__look-main">
                    <LoginNav user={user} logOut={logOut}/>
                    <Header active={active} />
                    <Main/>
                </div>
            </section>
        </>
    )
}