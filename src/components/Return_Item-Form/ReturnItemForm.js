import React, {useState, useEffect} from "react";
import "./ReturnItemForm.scss";
import {ReturnForm1} from "../ReturnForms/ReturnForm1";
import {ReturnForm2} from "../ReturnForms/ReturnForm2";
import {ReturnForm3} from "../ReturnForms/ReturnForm3";
import {ReturnForm4} from "../ReturnForms/ReturnForm4";

const STEP_NAMES = {
    first: '1',
    second: '2',
    third: "3",
    fourth: '4'
}
const STEP_ORDER = [STEP_NAMES.first, STEP_NAMES.second, STEP_NAMES.third, STEP_NAMES.fourth]

export const ReturnItemForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [stepsData, setStepsData] = useState({

    });
    console.log(stepsData);
    const currentStepName = STEP_ORDER[currentStep];

    let currentStepComponent;
    switch (currentStepName) {
        case STEP_NAMES.first:
            currentStepComponent = <ReturnForm1 setCurrentStep={setCurrentStep} setStepsData={setStepsData}/>
            break;
        case STEP_NAMES.second:
            currentStepComponent = <ReturnForm2 setCurrentStep={setCurrentStep} setStepsData={setStepsData}/>
            break;
        case STEP_NAMES.third:
            currentStepComponent = <ReturnForm3 setCurrentStep={setCurrentStep} setStepsData={setStepsData}/>
            break;
        case STEP_NAMES.fourth:
            currentStepComponent = <ReturnForm4 setCurrentStep={setCurrentStep} setStepsData={setStepsData}/>
            break;
    }

    console.log(STEP_NAMES.first)
    return (
        <>
            <section className="return__form-main">
                <div className="container">
                   <div className="return__form-main-box">
                       <h1>Krok {currentStep+1}/4</h1>
                       {
                           currentStepComponent
                       }
                   </div>
                </div>
            </section>
        </>
    )
}