import React, {useState, useEffect} from "react";
import {Link} from "react-scroll";

export const NavList = ({key, text, navList, id, active}) => {
    return (
        <>
            <li key={key} className="nav__list-text">
                {
                    active ? <Link to="/">{text}</Link> : <Link to={navList[id]} smooth={true}>{text}</Link>
                }
            </li>
        </>
    )
}