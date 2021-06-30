import React from "react";

import "./ThreeColumns.scss";

import {ThreeColumnsList} from "./ThreeColumnsList";

export const ThreeColumns = () => {
    const columns = [{
        number: "10",
        title: "oddanych worków"
    }, {
        number: "5",
        title: "wspartych organizacji"
    }, {
        number: "7",
        title: "zorganizowanych zbiórek"
    }
    ]

    return (
        <>
            <section className="threeColumns">
                <ul className="threeColumns__list">
                    {
                        columns.map((column, key) => <ThreeColumnsList column={column} key={key}/>)
                    }
                </ul>
            </section>
        </>
    )
}