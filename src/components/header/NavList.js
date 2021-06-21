import React, {useState, useEffect} from "react";
import {Link} from "react-scroll";
import {Link as RouterLink} from "react-router-dom"

export const NavList = ({key, text, navList, id, active}) => {
    return (
        <>
            {/*dodaj border block*/}
            <li key={key} className="nav__list-text">
                {
                    active ? <RouterLink to={`/#${navList[id]}`}>{text}</RouterLink> : <Link to={navList[id]} smooth={true}>{text}</Link>
                }
            </li>
        </>
    )
}