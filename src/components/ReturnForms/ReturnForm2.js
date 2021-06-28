import React, {useState, useEffect} from "react";
import {Field, Form} from "react-final-form";
import "./ReturnForm.scss";

export const ReturnForm2 = ({setCurrentStep, setStepsData}) => {
    return (
        <>
            <div className="form">
                <Form onSubmit={(form) => {
                    setStepsData(prev => ({
                        ...prev,
                        SECOND_FORM: form
                    }))
                    setCurrentStep(prev => prev + 1)
                }}>
                    {({handleSubmit}) => (
                        <form className="form__main" onSubmit={handleSubmit}>
                            <h1 className="form__main-title">
                                Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
                            </h1>
                            <div className="inputs">
                                <Field name="select">
                                    {({input}) => (
                                        <label>
                                            Liczba 60l worków:
                                            <select name="select" {...input}>
                                                <option selected disabled defaultValue='0'>-- wybierz --</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </label>
                                    )}
                                </Field>
                            </div>
                            <div className="buttons">
                                <button className="next btn">
                                    Dalej
                                </button>
                            </div>
                        </form>
                    )}
                </Form>
            </div>
        </>
    )
}