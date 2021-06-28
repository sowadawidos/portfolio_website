import React, {useState, useEffect} from "react";
import {LoginNav} from "../Navigation/LoginNav";
import {Header} from "../Header/Header";
import "./ReturnItems.scss";
import {Contact} from "../Contact/Contact";
import {Footer} from "../Footer/Footer";
import {SimpleSteps} from "./SimpleSteps";
import {Important} from "../Important/Important";
import {ReturnItemForm} from "../Return_Item-Form/ReturnItemForm";

export const ReturnItems = ({logOut, user, sendMessage}) => {
    const active = true;
    return (
        <>
            <section className="return__items">
                <div className="hero__box">
                    <LoginNav user={user} logOut={logOut}/>
                    <Header active={active}/>
                </div>
                <SimpleSteps/>
                <Important/>
                <ReturnItemForm/>
                <Contact sendMessage={sendMessage}/>
                <Footer/>
            </section>
        </>
    )
}