import React from "react";

export const ThreeColumnsList = ({column, key}) => {
    return (
        <>
            <li className="threeColumns__list-text" key={key}>
                <h1>{column.number}</h1>
                <h2>{column.title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti eligendi iure labore laborum modi pariatur possimus rem sed. Earum.</p>
            </li>
        </>
    )
}