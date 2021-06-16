import React, {useState, useEffect} from "react";
import "./Contact.scss";
import decoration from "../../assets/Decoration.svg"
import {Footer} from "../footer/Footer";

export const Contact = () => {
    return (
        <>
            <section className="contact" id="contact">
                <div className="background"/>
                <div className="contact__us">
                    <h1 className="contact__us-title">Skontaktuj się z nami</h1>
                    <img src={decoration} alt="decoration" className="decoration"/>
                    <form className="contact__form">
                        <div className="main__form">
                            <label>
                                Wpisz swoje imię
                                <input type="text" placeholder="Krzysztof"/>
                            </label>
                            <label>
                                Wpisz swój email
                                <input type="text" placeholder="abc@xyz.pl"/>
                            </label>
                        </div>
                        <label className="textarea">
                            Wpisz swoją wiadomość
                            <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                        </label>
                        <div className="contact__button">
                            <button>Wyślij</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}