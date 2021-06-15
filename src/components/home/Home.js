import React, {useState, useEffect} from "react";

export const Home = () => {
    return (
        <>
            <section className="first__look">
                <div className="first__look-img"/>
                <div className="first__look-main">
                    <div className="login__nav">
                        <button>Zaloguj</button>
                        <button>Załóż konto</button>
                    </div>
                    <div className="header">
                        <nav className="nav__bar">
                            <ul className="nav__list">
                                <li className="nav__list-text">
                                    <a href="">Start</a>
                                </li>
                                <li className="nav__list-text">
                                    <a href="">O co chodzi?</a>
                                </li>
                                <li className="nav__list-text">
                                    <a href="">O nas</a>
                                </li>
                                <li className="nav__list-text">
                                    <a href="">Fundacja i organizacje</a>
                                </li>
                                <li className="nav__list-text">
                                    <a href="">Kontakt</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="main">
                        <h1>Zacznij pomagać!</h1>
                        <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <img src="" alt=""/>
                        <div className="main__buttons">
                            <button>Oddaj rzeczy</button>
                            <button>Zorganizuj zbiórkę</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}