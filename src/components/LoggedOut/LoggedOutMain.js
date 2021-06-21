import React, {useState, useEffect} from "react";
import decoration from "../../assets/Decoration.svg";
import {Link} from "react-router-dom";

export const LoggedOutMain = () => {
    return (
        <>
            <div className="login__main">
                <h1 className="login__title">Wylogowanie nastąpiło pomyślnie!</h1>
                <img src={decoration} alt="decoration" className="login__image"/>
                <Link to="/">
                    <button className="back__to-home">
                        Strona główna
                    </button>
                </Link>
            </div>
        </>
    )
}