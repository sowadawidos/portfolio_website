import React, {useState, useEffect} from "react";
import {Link} from "react-scroll";

export const NavList = ({key, text, navList}) => {
    console.log(navList);
    return (
        <>
            <li key={key} className="nav__list-text">
                <Link to={navList[0]} smooth={true}>{text}</Link>
            </li>
        </>
    )
}