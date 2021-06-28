import React, {useState, useEffect} from "react";
import form_hero from "./Form-Hero-Image.jpg"
import "./ReturnItems.scss";
import decoration from "../../assets/Decoration.svg";
import {SimpleStepsReturnList} from "./SimpleStepsReturnList";

export const SimpleSteps = () => {
    const SimpleStepsItem = ["Wybierz rzeczy", "Spakuj je w worki", "Wybierz fundacje", "Zamów kuriera"];

    return (
        <>
            <section className="simple__steps-return">
                <div className="container">
                    <div className="form__hero"/>
                    <div className="simple__steps-hero">
                        <div className="simple__steps-hero-main">
                            <h1 className="simple__steps-title">Oddaj rzeczy, których już nie chcesz</h1>
                            <h1 className="simple__steps-title simple__steps-title2">Potrzebującym</h1>
                            <img className="decoration" src={decoration} alt="decoration"/>
                            <h2 className="simple__steps-text">Wystarczą 4 proste kroki:</h2>
                            <ul className="simple__steps-list">
                                {
                                    SimpleStepsItem.map((SimpleStep, key) => <SimpleStepsReturnList SimpleStep={SimpleStep} key={key} id={key}/>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}