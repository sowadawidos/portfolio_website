import React, {useState, useEffect} from "react";
import {Form, Field} from 'react-final-form';
import "./ReturnForm.scss";

export const ReturnForm1 = ({setCurrentStep, setStepsData}) => {
    return (
        <>
            <div className="form">
                <Form onSubmit={(form) => {
                    setStepsData(prev => ({
                        ...prev,
                        FIRST_FORM: form
                    }))
                    setCurrentStep(prev => prev + 1)
                }}>
                    {({handleSubmit}) => (
                        <form className="form__main" onSubmit={handleSubmit}>
                            <h1 className="form__main-title">
                                Zaznacz, co chcesz oddać
                            </h1>
                            <div className="inputs">
                                <Field name="first-checkbox" type="checkbox">
                                    {({input}) => (
                                        <label>
                                            <input type="checkbox" name="first-checkbox" {...input}/>
                                            ubrania, które nadają się do ponownego użycia
                                        </label>
                                    )}
                                </Field>
                                <Field name="second-checkbox" type="checkbox">
                                    {({input}) => (
                                        <label>
                                            <input type="checkbox" name="second-checkbox" {...input}/>
                                            ubrania, do wyrzucenia
                                        </label>
                                    )}
                                </Field>
                                <Field name="third-checkbox" type="checkbox">
                                    {({input}) => (
                                        <label>
                                            <input type="checkbox" name="third-checkbox" {...input}/>
                                            zabawki
                                        </label>
                                    )}
                                </Field>
                                <Field name="fourth-checkbox" type="checkbox">
                                    {({input}) => (
                                        <label>
                                            <input type="checkbox" name="fourth-checkbox" {...input}/>
                                            książki
                                        </label>
                                    )}
                                </Field>
                                <Field name="fifth-checkbox" type="checkbox">
                                    {({input}) => (
                                        <label htmlFor="">
                                            <input type="checkbox" name="fifth-checkbox" {...input}/>
                                            Inne
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