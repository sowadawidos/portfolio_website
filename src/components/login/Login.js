import React, {useState, useEffect} from "react";
import {Header} from "../header/Header";
import {LoginNav} from "../navigation/LoginNav";
import "./Login.scss";
import {LoginMain} from "./LoginMain";

export const Login = () => {
    return (
        <>
            <section className="login">
                <div className="container">
                    <LoginNav/>
                    <Header/>
                    <LoginMain/>
                </div>
            </section>
        </>
    )
}