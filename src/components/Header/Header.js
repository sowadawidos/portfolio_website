import React, {useState, useEffect} from "react";
import "./Header.scss"
import {NavList} from "./NavList";

export const Header = ({active}) => {
    const nav = ["Start", "O co chodzi?", "O nas", "Fundacja i organizacje", "Kontakt"];
    const navLinks = ["menu", "Simple_steps", "About_us", "Helps", "Contact"];

    return (
        <>
            <div className="header">
                <nav className="nav__bar">
                    <ul className="nav__list">
                        {
                            nav.map((nav_text, key) => <NavList key={key} text={nav_text} navList={navLinks} id={key} active={active}/>)
                        }
                    </ul>
                </nav>
            </div>
        </>
    )
}