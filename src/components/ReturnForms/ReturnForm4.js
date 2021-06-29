import React, {useState, useEffect} from "react";
import {Field, Form} from "react-final-form";

export const ReturnForm4 = ({setCurrentStep, setStepsData}) => {
    const handleBack = () => {
        setCurrentStep(prev => prev - 1);
    }
    return (
        <>
            <div className="form">
                <Form
                    onSubmit={(form) => {
                        setStepsData(prev => ({
                            ...prev,
                            FOURTH_FORM: form
                        }))
                        setCurrentStep(prev => prev + 1)
                    }}
                    validate={values => {
                        const errors = {}
                        if (!values.street || values.street.length < 2) {
                            errors.street = true
                        }
                        if (!values.city || values.city.length < 2) {
                            errors.city = true
                        }
                        if (!values.postCode || values.postCode.length < 5) {
                            errors.postCode = true
                        }
                        if (!values.telephoneNumber || values.telephoneNumber.length < 9) {
                            errors.telephoneNumber = true
                        }
                        if (!values.date) {
                            errors.date = true
                        }
                        if (!values.hour) {
                            errors.hour = true
                        }
                        return errors;
                    }}>
                    {({handleSubmit}) => (
                        <form className="form__main" onSubmit={handleSubmit}>
                            <h1 className="form__main-title">
                                Podaj adres oraz termin odbioru rzeczy przez kuriera
                            </h1>
                            <div className="last_form">
                                <div className="address">
                                    <h1 className="form__main-title smaller">
                                        Adres odbioru
                                    </h1>
                                    <Field name="street" type="text">
                                        {({input, meta}) => (
                                            <label>
                                                Ulica
                                                <input type="text" name="street" {...input} style={meta.error && {border: "1px solid red"}}/>
                                            </label>
                                        )}
                                    </Field>
                                    <Field name="city" type="text">
                                        {({input, meta}) => (
                                            <label>
                                                Miasto
                                                <input type="text" name="city" {...input} style={meta.error && {border: "1px solid red"}}/>
                                            </label>
                                        )}
                                    </Field>
                                    <Field name="postCode" type="number">
                                        {({input, meta}) => (
                                            <label>
                                                Kod pocztowy
                                                <input type="number" name="post-code" {...input} style={meta.error && {border: "1px solid red"}}/>
                                            </label>
                                        )}
                                    </Field>
                                    <Field name="telephoneNumber" type="number">
                                        {({input, meta}) => (
                                            <label>
                                                Numer telefonu
                                                <input name="telephone-number" {...input} style={meta.error && {border: "1px solid red"}}/>
                                            </label>
                                        )}
                                    </Field>
                                </div>
                                <div className="collection-date">
                                    <h1 className="form__main-title smaller">
                                        Termin odbioru
                                    </h1>
                                    <Field name="date" type="date">
                                        {({input, meta}) => (
                                            <label>
                                                Data
                                                <input type="text" name="date" {...input} style={meta.error && {border: "1px solid red"}}/>
                                            </label>
                                        )}
                                    </Field>
                                    <Field name="hour" type="time">
                                        {({input, meta}) => (
                                            <label>
                                                Godzina
                                                <input type="text" name="hour" {...input} style={meta.error && {border: "1px solid red"}}/>
                                            </label>
                                        )}
                                    </Field>
                                    <Field name="comments" type="text" defaultValue="">
                                        {({input}) => (
                                            <label>
                                                Uwagi dla kuriera
                                                <textarea name="comments" {...input} />
                                            </label>
                                        )}
                                    </Field>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className="back btn" onClick={handleBack}>
                                    Wstecz
                                </button>
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