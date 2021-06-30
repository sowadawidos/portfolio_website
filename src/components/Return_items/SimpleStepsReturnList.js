import React from "react";

export const SimpleStepsReturnList = ({SimpleStep, id, key}) => {
    return (
        <>
            <li key={key} className="simple__steps-list-text">
                <h1>{id + 1}</h1>
                <h2>{SimpleStep}</h2>
            </li>
        </>
    )
}