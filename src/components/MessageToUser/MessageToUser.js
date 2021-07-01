import React from "react"
import {Link} from "react-router-dom";

import decoration from "../../assets/Decoration.svg";

export const MessageToUser = ({message}) => {
    return (
        <>
            <div className="login__main">
                <h1 className="login__title">{message}</h1>
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