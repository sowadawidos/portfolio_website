import React from "react"
import { Form} from "react-final-form";

import "./Summary.scss";

import item from "../Simple_steps/Icon-1.svg";
import circle from "../Simple_steps/Icon-4.svg";


export const Summary = ({setCurrentStep, stepsData, getOrder}) => {
    const handleBack = () => {
        setCurrentStep(prev => prev - 1);
    }
    return (
        <>
            <div className="form">
                <Form
                    onSubmit={() => {
                        getOrder(stepsData);
                        setCurrentStep(prev => prev + 1);
                    }}>
                    {({handleSubmit}) => (
                        <form className="form__main" onSubmit={handleSubmit}>
                            <h1 className="form__main-title">
                                Podsumowanie Twojej darowizny
                            </h1>
                            <h1 className="form__main-title smaller">
                                Oddajesz:
                            </h1>
                            <div className="items">
                                <img src={item} alt="" className="items-img"/>
                                <h3 className="items-text">
                                    {stepsData.SECOND_FORM.select} worki, {stepsData.FIRST_FORM.firstCheckbox}, {stepsData.THIRD_FORM.thirdCheckbox}
                                </h3>
                            </div>
                            <div className="items">
                                <img src={circle} alt="" className="items-img"/>
                                <h3 className="items-text">
                                    dla lokalizacji: {stepsData.THIRD_FORM.localization}
                                </h3>
                            </div>
                            <div className="person-summary">
                                <div className="address">
                                    <h1 className="form__main-title smaller">
                                        Adres odbioru
                                    </h1>
                                    <div className="address-text">
                                        <h1 className="address-title">
                                            Ulica <span>{stepsData.FOURTH_FORM.street}</span>
                                        </h1>
                                    </div>
                                    <div className="address-text">
                                        <h1 className="address-title">
                                            Miasto <span>{stepsData.FOURTH_FORM.city}</span>
                                        </h1>
                                    </div>
                                    <div className="address-text">
                                        <h1 className="address-title">
                                            Kod pocztowy <span>{stepsData.FOURTH_FORM.postCode}</span>
                                        </h1>

                                    </div>
                                    <div className="address-text">
                                        <h1 className="address-title">
                                            Numer telefonu <span>{stepsData.FOURTH_FORM.telephoneNumber}</span>
                                        </h1>
                                    </div>
                                </div>
                                <div className="collection-date">
                                    <h1 className="form__main-title smaller">
                                        Termin odbioru
                                    </h1>
                                    <div className="collection-text">
                                        <h1 className="collection-title">
                                            Data <span>{stepsData.FOURTH_FORM.date}</span>
                                        </h1>
                                    </div>
                                    <div className="collection-text">
                                        <h1 className="collection-title">
                                            Godzina <span>{stepsData.FOURTH_FORM.hour}</span>
                                        </h1>
                                    </div>
                                    <div className="collection-text">
                                        <h1 className="collection-title">
                                            Uwagi dla kuriera
                                        </h1>
                                        <span className="kurier">{stepsData.FOURTH_FORM.comments}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className="back btn" onClick={handleBack}>
                                    Wstecz
                                </button>
                                <button className="next btn">
                                    Potwierdzam
                                </button>
                            </div>
                        </form>
                    )}
                </Form>
            </div>
        </>
    )
}