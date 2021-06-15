import React, {useState, useEffect} from "react";
import {LoginNav} from "../navigation/LoginNav";
import {Header} from "../header/Header";
import {Main} from "./Main";
import "./Hero.scss";

export const Hero = () => {
    return (
        <>
            <section className="first__look" id="main">
                <div className="first__look-img"/>
                <div className="first__look-main">
                    <LoginNav/>
                    <Header/>
                    <Main/>
                </div>
            </section>
        </>
    )
}