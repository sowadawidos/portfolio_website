import React, {useState, useEffect} from "react";

export const SimpleStepsReturnList = ({SimpleStep, id, key}) => {
    return (
        <>
            <li className="simple__steps-list-text">
                <h1>{id + 1}</h1>
                <h2>{SimpleStep}</h2>
            </li>
        </>
    )
}