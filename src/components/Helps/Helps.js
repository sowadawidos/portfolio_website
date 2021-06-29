import React, {useState, useEffect} from "react";
import decoration from "../../assets/Decoration.svg"
import "./Helps.scss";
import {HelpsButtons} from "./HelpsButtons";
import {HelpsList} from "./HelpsList";

export const Helps = () => {
    const [active, setActive] = useState({
        first: true,
        second: false,
        third: false
    })
    const helps = {
        foundation: [
            {
                name: "Dbam o zdrowie",
                target: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
                collection: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
            },
            {
                name: "Dla dzieci",
                target: "Pomoc dzieciom z ubogich rodzin.",
                collection: "ubrania, meble, zabawki"
            },
            {
                name: "Bez domu",
                target: "Pomoc dla osób nie posiadających miejsca zamieszkania.",
                collection: "ubrania, jedzenie, ciepłe koce"
            }
        ],
        organization: [
            {
                name: "Lorem ipsum 1",
                target: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                collection: "Egestas, sed, tempus"
            },
            {
                name: "Lorem ipsum 1",
                target: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                collection: "Ut, aliquam, purus, sit, amet"
            },
            {
                name: "Lorem ipsum 1",
                target: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                collection: "Mi, quis, hendrerit, dolor"
            }
        ],
        local: [
            {
                name: "Lorem ipsum 1",
                target: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                collection: "Egestas, sed, tempus"
            },
            {
                name: "Lorem ipsum 1",
                target: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                collection: "Ut, aliquam, purus, sit, amet"
            },
            {
                name: "Lorem ipsum 1",
                target: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                collection: "Mi, quis, hendrerit, dolor"
            },
        ]
    }
    return (
        <>
            <section className="helps" id="helps">
                <div className="container">
                    <h1 className="helps__title">Komu pomagamy?</h1>
                    <img src={decoration} alt="decoration" className="helps__image"/>
                    <HelpsButtons setActive={setActive} active={active}/>
                    <div className="helps__text">
                        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
                        sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </div>
                    <ul className="helps__list">
                        {
                            active.first && helps.foundation.map((el, key) => <HelpsList item={el} key={key} active={active}/>)
                        }
                        {
                            active.second && helps.organization.map((el, key) => <HelpsList item={el} key={key} active={active}/>)
                        }
                        {
                            active.third && helps.local.map((el, key) => <HelpsList item={el} key={key} active={active}/>)
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}