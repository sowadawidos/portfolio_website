import React from "react";

import {AboutUsMain} from "./AboutUsMain";

import "./AboutUs.scss";

export const AboutUs = () => {
    return (
        <>
            <section className="about__us" id="about_us">
                <AboutUsMain/>
                <div className="about__us-image"/>
            </section>
        </>
    )
}