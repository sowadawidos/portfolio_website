import React, {useState, useEffect} from "react";
import {Field, Form} from "react-final-form";

export const ReturnForm4 = ({setCurrentStep, setStepsData}) => {
    return (
        <>
            <div className="form">
                <Form onSubmit={(form) => {
                    setStepsData(prev => ({
                        ...prev,
                        FOURTH_FORM: form
                    }))
                    setCurrentStep(prev => prev + 1)
                }}>
                    {({handleSubmit}) => (
                        <form className="form__main" onSubmit={handleSubmit}>
                            <h1 className="form__main-title">
                                Podaj adres oraz termin odbioru rzecz przez kuriera
                            </h1>
                            <div className="inputs">
                                <div className="address">
                                    <h1 className="form__main-title smaller">
                                        Adres odbioru
                                    </h1>
                                    <Field name="street" type="text">
                                        {({input}) => (
                                            <label>
                                                Ulica
                                                <input type="text" name="street" {...input}/>
                                            </label>
                                        )}
                                    </Field>
                                    <Field name="city" type="text">
                                        {({input}) => (
                                            <label>
                                                Miasto
                                                <input type="text" name="city" {...input}/>
                                            </label>
                                        )}
                                    </Field>
                                    <Field name="post-code" type="text">
                                        {({input}) => (
                                            <label>
                                                Kod pocztowy
                                                <input type="text" name="post-code" {...input}/>
                                            </label>
                                        )}
                                    </Field>
                                    <Field name="telephone-number" type="text">
                                        {({input}) => (
                                            <label>
                                                Numer telefonu
                                                <input type="text" name="telephone-number" {...input}/>
                                            </label>
                                        )}
                                    </Field>
                                </div>
                                <div className="collection-date">
                                    <h1 className="form__main-title smaller">
                                        Termin odbioru
                                    </h1>
                                    <Field name="date" type="text">
                                        {({input}) => (
                                            <label>
                                                Data
                                                <input type="text" name="date" {...input}/>
                                            </label>
                                        )}
                                    </Field>
                                    <Field name="hour" type="text">
                                        {({input}) => (
                                            <label>
                                                Godzina
                                                <input type="text" name="hour" {...input}/>
                                            </label>
                                        )}
                                    </Field>
                                    <Field name="comments" type="text">
                                        {({input}) => (
                                            <label>
                                                Uwagi dla kuriera
                                                <textarea name="comments" {...input}/>
                                            </label>
                                        )}
                                    </Field>
                                </div>
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