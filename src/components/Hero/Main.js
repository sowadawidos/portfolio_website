import React, {useState, useEffect} from "react";
import "./Main.scss"
import decoration from "../../assets/Decoration.svg"
import {Link} from "react-router-dom";

export const Main = ({user}) => {
    return (
        <>
            <div className="main">
                <h1>Zacznij pomagać!</h1>
                <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={decoration} alt="decoration"/>
                <div className="main__buttons">
                    {
                        user ?
                            <Link to="/oddaj-rzeczy">
                                <button>Oddaj rzeczy</button>
                            </Link>
                            :
                            <Link to="/logowanie">
                                <button>Oddaj rzeczy</button>
                            </Link>
                    }
                    {
                        user ?
                            <Link to="/oddaj-rzeczy">
                                <button>Zorganizuj zbiórkę</button>
                            </Link>
                            :
                            <Link to="/logowanie">
                                <button>Zorganizuj zbiórkę</button>
                            </Link>
                    }
                </div>
            </div>
        </>
    )
}