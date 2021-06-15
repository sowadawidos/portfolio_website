import React, {useState, useEffect} from "react";
import "./Home.scss";
import {Hero} from "../hero/Hero";
import {ThreeColumns} from "../three_columns/ThreeColumns";

export const Home = () => {
    return (
        <>
            <Hero/>
            <ThreeColumns/>
        </>
    )
}