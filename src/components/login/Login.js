import React, {useState, useEffect} from "react";
import {Header} from "../header/Header";
import {LoginNav} from "../navigation/LoginNav";
import "./Login.scss";
import {LoginMain} from "./LoginMain";

export const Login = () => {
    const active = true;
    return (
        <>
            <section className="login">
                <div className="container">
                    <LoginNav/>
                    <Header active={active}/>
                    <LoginMain/>
                </div>
            </section>
        </>
    )
}