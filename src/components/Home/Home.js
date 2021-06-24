import React, {useState, useEffect} from "react";
import "./Home.scss";
import {Hero} from "../Hero/Hero";
import {ThreeColumns} from "../Three_columns/ThreeColumns";
import {SimpleSteps} from "../Simple_steps/SimpleSteps";
import {AboutUs} from "../About_us/AbousUs";
import {Helps} from "../Helps/Helps";
import {Contact} from "../Contact/Contact";
import {Footer} from "../Footer/Footer";

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