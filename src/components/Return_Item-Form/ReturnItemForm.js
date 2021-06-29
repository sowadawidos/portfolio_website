import React, {useState, useEffect, useCallback} from "react";
import "./ReturnItemForm.scss";
import {ReturnForm1} from "../ReturnForms/ReturnForm1";
import {ReturnForm2} from "../ReturnForms/ReturnForm2";
import {ReturnForm3} from "../ReturnForms/ReturnForm3";
import {ReturnForm4} from "../ReturnForms/ReturnForm4";
import {Summary} from "../ReturnForms/Summary";
import {ThankYou} from "../ReturnForms/ThankYou";

const STEP_NAMES = {
    first: "FIRST_FORM",
    second: "SECOND_FORM",
    third: "THIRD_FORM",
    fourth: "FOURTH_FORM",
    fifth: "FIFTH_FORM",
    sixth: "SIXTH_FORM"
}
const STEP_ORDER = [STEP_NAMES.first, STEP_NAMES.second, STEP_NAMES.third, STEP_NAMES.fourth, STEP_NAMES.fifth, STEP_NAMES.sixth]

export const ReturnItemForm = ({getOrder}) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [stepsData, setStepsData] = useState({

    });
    const currentStepName = STEP_ORDER[currentStep];

    const setData = useCallback((stepName, stepData) => {
        setStepsData(prev => ({
            ... prev,
            [stepName]: stepData
        }))
    });

    let currentStepComponent;
    switch (currentStepName) {
        case STEP_NAMES.first:
            currentStepComponent = <ReturnForm1 data={stepsData[STEP_NAMES.first]} setCurrentStep={setCurrentStep} setData={(data) => setData(STEP_NAMES.first, data)}/>
            break;
        case STEP_NAMES.second:
            currentStepComponent = <ReturnForm2 data={stepsData[STEP_NAMES.second]} setCurrentStep={setCurrentStep} setData={(data) => setData(STEP_NAMES.second, data)}/>
            break;
        case STEP_NAMES.third:
            currentStepComponent = <ReturnForm3 data={stepsData[STEP_NAMES.third]} setCurrentStep={setCurrentStep} setData={(data) => setData(STEP_NAMES.third, data)}/>
            break;
        case STEP_NAMES.fourth:
            currentStepComponent = <ReturnForm4 data={stepsData[STEP_NAMES.fourth]} setCurrentStep={setCurrentStep} setData={(data) => setData(STEP_NAMES.fourth, data)}/>
            break;
        case STEP_NAMES.fifth:
            currentStepComponent = <Summary setCurrentStep={setCurrentStep} stepsData={stepsData} getOrder={getOrder}/>
            break;
        case STEP_NAMES.sixth:
            currentStepComponent = <ThankYou/>
            break;
    }
    return (
        <>
            <section className="return__form-main">
                <div className="container">
                   <div className="return__form-main-box">
                       <h1>{ currentStep < 4 ? `Krok ${currentStep + 1}/4` : null}</h1>
                       {
                           currentStepComponent
                       }
                   </div>
                </div>
            </section>
        </>
    )
}