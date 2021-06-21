import React, {useState, useEffect} from "react";
import "./Home.scss";
import {Hero} from "../hero/Hero";
import {ThreeColumns} from "../three_columns/ThreeColumns";
import {SimpleSteps} from "../simple_steps/SimpleSteps";
import {AboutUs} from "../about_us/AbousUs";
import {Helps} from "../helps/Helps";
import {Contact} from "../contact/Contact";
import {Footer} from "../footer/Footer";

export const Home = ({user, logOut, sendMessage}) => {
    const active = false;
    return (
        <>
            <Hero active={active} user={user} logOut={logOut}/>
            <ThreeColumns/>
            <SimpleSteps/>
            <AboutUs/>
            <Helps/>
            <Contact sendMessage={sendMessage}/>
            <Footer/>
        </>
    )
}