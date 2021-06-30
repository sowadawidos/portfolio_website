import React from "react";

import "./ReturnItems.scss";

import {LoginNav} from "../Navigation/LoginNav";
import {Header} from "../Header/Header";
import {Contact} from "../Contact/Contact";
import {Footer} from "../Footer/Footer";
import {SimpleStep} from "./SimpleStep";
import {Important} from "../Important/Important";
import {ReturnItemForm} from "../ReturnItemForm/ReturnItemForm";

export const ReturnItems = ({logOut, user, sendMessage, getOrder}) => {
    const active = true;
    return (
        <>
            <section className="return__items">
                <div className="hero__box">
                    <LoginNav user={user} logOut={logOut}/>
                    <Header active={active}/>
                </div>
                <SimpleStep/>
                <Important/>
                <ReturnItemForm getOrder={getOrder}/>
                <Contact sendMessage={sendMessage}/>
                <Footer/>
            </section>
        </>
    )
}