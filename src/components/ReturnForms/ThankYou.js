import React from "react"

import "./ThankYou.scss";

import decoration from "../../assets/Decoration.svg"


export const ThankYou = () => {
    return (
        <>
            <div className="thankYou">
                <div className="main">
                    <h1>Dziękujemy za przesłanie formularza</h1>
                    <h1>Na maila prześlemy wszelkie informacje o odbiorze.</h1>
                    <img src={decoration} alt=""/>
                </div>
            </div>
        </>
    )
}