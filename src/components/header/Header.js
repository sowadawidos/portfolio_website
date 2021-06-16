import React, {useState, useEffect} from "react";
import "./Header.scss"
import {NavList} from "./NavList";

export const Header = () => {
    const nav = ["Start", "O co chodzi?", "O nas", "Fundacja i organizacje", "Kontakt"];
    const navLinks = ["menu", "simple_steps", "about_us", "helps", "contact"];

    return (
        <>
            <div className="header">
                <nav className="nav__bar">
                    <ul className="nav__list">
                        {
                            nav.map((nav_text, key) => <NavList key={key} text={nav_text} navList={navLinks} id={key}/>)
                        }
                    </ul>
                </nav>
            </div>
        </>
    )
}