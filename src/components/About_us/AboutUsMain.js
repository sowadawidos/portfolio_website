import React, {useState, useEffect} from "react";
import decoration from "../../assets/Decoration.svg"
import signature from "./Signature.svg"
export const AboutUsMain = () => {
    return (
        <>
            <div className="about__us-main">
                <h1 className="about__us-title">O nas</h1>
                <img src={decoration} alt="decoration" className="decoration"/>
                <p className="about__us-text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <div className="signature">
                    <img src={signature} alt=""/>
                </div>
            </div>
        </>
    )
}