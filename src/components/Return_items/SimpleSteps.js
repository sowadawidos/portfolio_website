import React, {useState, useEffect} from "react";
import form_hero from "./Form-Hero-Image.jpg"
import "./ReturnItems.scss";
import decoration from "../../assets/Decoration.svg";

export const SimpleSteps = () => {
    return (
        <>
            <section className="simple__steps-return">
                <div className="container">
                    <img className="form_hero" src={form_hero} alt=""/>
                    <div className="simple__steps-hero">
                        <div className="simple__steps-hero-main">
                            <h1 className="simple__steps-title">Oddaj rzeczy, których już nie chcesz</h1>
                            <h1 className="simple__steps-title simple__steps-title2">Potrzebującym</h1>
                            <img className="decoration" src={decoration} alt="decoration"/>
                            <h2 className="simple__steps-text">Wystarczą 4 proste kroki:</h2>
                            <ul className="simple__steps-list">
                                <li className="simple__steps-list-text">
                                    <h1>1</h1>
                                    <h2>Wybierz rzeczy</h2>
                                </li>
                                <li className="simple__steps-list-text">
                                    <h1>2</h1>
                                    <h2>Wybierz rzeczy</h2>
                                </li>
                                <li className="simple__steps-list-text">
                                    <h1>3</h1>
                                    <h2>Wybierz rzeczy</h2>
                                </li>
                                <li className="simple__steps-list-text">
                                    <h1>4</h1>
                                    <h2>Wybierz rzeczy</h2>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}