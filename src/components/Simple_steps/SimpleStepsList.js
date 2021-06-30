import React from "react";

export const SimpleStepsList = ({key, step}) => {
    return (
        <>
            <li key={key} className="simple__steps-list-text">
                <img src={step.image} alt=""/>
                <h2>{step.task}</h2>
                <span/>
                <h3>{step.description}</h3>
            </li>
        </>
    )
}