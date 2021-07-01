import React from "react";

import "./ReturnItems.scss";

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
                <SimpleStep user={user} active={active} logOut={logOut}/>
                <Important/>
                <ReturnItemForm getOrder={getOrder}/>
                <Contact sendMessage={sendMessage}/>
                <Footer/>
            </section>
        </>
    )
}