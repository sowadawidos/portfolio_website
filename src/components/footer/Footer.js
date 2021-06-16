import React, {useState, useEffect} from "react";
import facebook from "../../assets/Facebook.svg";
import instagram from "../../assets/Instagram.svg";
import "./Footer.scss";

export const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="container">
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