import React, { useState, useEffect } from "react"
import decoration from "../../assets/Decoration.svg"
import "./ThankYou.scss";

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