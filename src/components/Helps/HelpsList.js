import React, { useState, useEffect } from "react"

export const HelpsList = ({item, key, active}) => {
    return (
        <>
            <li key={key} className="helps__list-text">
                <div className="helps__list-text-main">
                    <h1>{active.first && "Fundacja"}{active.second && "Organizacja"}{active.third && "Zbiórka"} “{item.name}”</h1>
                    <h2>Cel i misja: {item.target}</h2>
                </div>
                <div className="helps_list-text-second">
                    {item.collection}
                </div>
            </li>
        </>
    )
}