import React, {useState, useEffect} from "react";
import Hamburger from 'hamburger-react'

import "./Header.scss"

import {NavList} from "./NavList";


export const Header = ({active}) => {
    const nav = ["Start", "O co chodzi?", "O nas", "Fundacja i organizacje", "Kontakt"];
    const navLinks = ["menu", "simple_steps", "about_us", "helps", "contact"];
    const [isOpen, setOpen] = useState(false)
    const [navBar, setNavBar] = useState(false)

    useEffect(() => {
        if (window.innerWidth <= 650) {
            setNavBar(true)
        }
    }, [])
    const changeNav = () => {
        if (window.innerWidth <= 650) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    }
    window.addEventListener('resize', changeNav);
    return (
        <>
            <div className="header">
                {navBar && <Hamburger toggled={isOpen} toggle={setOpen} />}
                {
                    isOpen ?
                        <nav className="nav__bar show">
                            <ul className="nav__list">
                                {
                                    nav.map((nav_text, key) => <NavList key={key} text={nav_text} navList={navLinks} id={key} active={active}/>)
                                }
                            </ul>
                        </nav>
                        :
                        <nav className="nav__bar">
                            <ul className="nav__list">
                                {
                                    nav.map((nav_text, key) => <NavList key={key} text={nav_text} navList={navLinks} id={key} active={active}/>)
                                }
                            </ul>
                        </nav>
                }
            </div>
        </>
    )
}