import React, {useState, useEffect} from "react";
import decoration from "../../assets/Decoration.svg";

export const LoginMain = () => {
    return (
        <>
            <div className="login__main">
                <h1 className="login__title">Zaloguj się</h1>
                <img src={decoration} alt="decoration" className="login__image"/>
                <form className="login__form">
                    <div className="inputs">
                        <label>
                            E-mail
                            <input type="text"/>
                        </label>
                        <label>
                            Hasło
                            <input type="text"/>
                        </label>
                    </div>
                    <div className="buttons">
                        <button className="singUp">
                            Załóż konto
                        </button>
                        <button className="singIn">
                            Zaloguj się
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}