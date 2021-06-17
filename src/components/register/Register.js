import React, {useState, useEffect} from "react";
import {LoginNav} from "../navigation/LoginNav";
import {Header} from "../header/Header";
import {RegisterMain} from "./RegisterMain";

export const Register = () => {
    return (
        <>
            <section className="login">
                <div className="container">
                    <LoginNav/>
                    <Header/>
                    <RegisterMain/>
                </div>
            </section>
        </>
    )
}