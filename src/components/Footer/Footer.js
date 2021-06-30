import React from "react";

import "./Footer.scss";

import facebook from "./Facebook.svg";
import instagram from "./Instagram.svg";


export const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="container">
                    <span/>
                    <div className="copyright">
                        Copyright by Coders Lab
                    </div>
                    <div className="social">
                        <a href="https://facebook.com"><img src={facebook} alt="facebook"/></a>
                        <a href="https://instagram.com"><img src={instagram} alt="instagram"/></a>
                    </div>
                </div>
            </section>
        </>
    )
}