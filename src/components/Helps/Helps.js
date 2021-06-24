import React, {useState, useEffect} from "react";
import decoration from "../../assets/Decoration.svg"
import "./Helps.scss";
import {HelpsPages} from "./HelpsPages";
import {HelpsButtons} from "./HelpsButtons";

export const Helps = () => {
    return (
        <>
            <section className="helps" id="helps">
                <div className="container">
                    <h1 className="helps__title">Komu pomagamy?</h1>
                    <img src={decoration} alt="decoration" className="helps__image"/>
                    <HelpsButtons/>
                    <div className="helps__text">
                        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </div>
                    <ul className="helps__list">
                        <li className="helps__list-text">
                            <div className="helps__list-text-main">
                                <h1>Fundacja “Dbam o Zdrowie”</h1>
                                <h2>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</h2>
                            </div>
                            <div className="helps_list-text-second">
                                ubrania, jedzenie, sprzęt AGD, meble, zabawki
                            </div>
                        </li>
                        <li className="helps__list-text">
                            <div className="helps__list-text-main">
                                <h1>Fundacja “Dla dzieci”</h1>
                                <h2>Cel i misja: Pomoc dzieciom z ubogich rodzin.</h2>
                            </div>
                            <div className="helps_list-text-second">
                                ubrania, meble, zabawki
                            </div>
                        </li>
                        <li className="helps__list-text">
                            <div className="helps__list-text-main">
                                <h1>Fundacja “Bez domu”</h1>
                                <h2>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</h2>
                            </div>
                            <div className="helps_list-text-second">
                                ubrania, jedzenie, ciepłe koce
                            </div>
                        </li>
                    </ul>
                    <HelpsPages/>
                </div>
            </section>
        </>
    )
}