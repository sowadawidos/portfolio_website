import React from "react";

export const HelpsButtons = ({setActive}) => {

    const handleFirstButton = () => {
        setActive({
            first: true,
            second: false,
            third: false
        })
    }
    const handleSecondButton = () => {
        setActive({
            first: false,
            second: true,
            third: false
        })
    }
    const handleThirdButton = () => {
        setActive({
            first: false,
            second: false,
            third: true
        })
    }
    return (
        <>
            <div className="helps__buttons">
                <button onClick={handleFirstButton}>Fundacjom</button>
                <button onClick={handleSecondButton}>Organizacjom pozarządowym</button>
                <button onClick={handleThirdButton}>Lokalnym zbiórkom</button>
            </div>
        </>
    )
}