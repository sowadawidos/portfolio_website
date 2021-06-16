import React, {useState, useEffect} from "react";
import "./SimpleSteps.scss";
import decoration from "../../assets/Decoration.svg"
import image1 from "../../assets/Icon-1.svg"
import image2 from "../../assets/Icon-2.svg"
import image3 from "../../assets/Icon-3.svg"
import image4 from "../../assets/Icon-4.svg"
import {SimpleStepsList} from "./SimpleStepsList";
import {Link} from "react-router-dom";

export const SimpleSteps = () => {
    const steps = [{
        image: image1,
        task: "Wybierz rzeczy",
        description: "ubrania, zabawki, sprzęt i inne"
    },
        {
        image: image2,
        task: "Spakuj je",
        description: "skorzystaj z worków na śmieci"
    },
        {
        image: image3,
        task: "Zdecyduj komu chcesz pomóc",
        description: "wybierz zaufane miejsce"
    },
        {
        image: image4,
        task: "Zamów kuriera",
        description: "kurier przyjedzie w dogodnym terminie"
    }]

    return (
        <>
            <section className="simple__steps" id="simple_steps">
                <h1 className="simple__steps-title">Wystarczą 4 proste kroki</h1>
                <img className="decoration" src={decoration} alt="decoration"/>
                <div className="simple__steps-box">
                    <ul className="simple__steps-list">
                        {
                            steps.map((step, key) => <SimpleStepsList step={step} key={key}/>)
                        }
                    </ul>
                </div>
                <Link to="/logowanie">
                    <button>oddaj rzeczy</button>
                </Link>
            </section>
        </>
    )
}