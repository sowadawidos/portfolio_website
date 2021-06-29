import React, {useState, useEffect} from "react";
import {Form, Field} from 'react-final-form';
import "./ReturnForm.scss";

export const ReturnForm1 = ({setCurrentStep, setData}) => {
    const [error, setError] = useState(false);
    return (
        <>
            <div className="form">
                <Form
                    onSubmit={(form) => {
                        if (!form.firstCheckbox) {
                            setError(true);
                        } else {
                            setData(form);
                            setCurrentStep(prev => prev + 1);
                        }

                    }}>
                    {({handleSubmit}) => (
                        <form className="form__main" onSubmit={handleSubmit}>
                            <h1 className="form__main-title">
                                Zaznacz, co chcesz oddać
                            </h1>
                            <div className="inputs">
                                <Field name="firstCheckbox" type="radio"
                                       value="ubrania które nadają się do ponownego użycia">
                                    {({input}) => (
                                        <label>
                                            <input type="checkbox" name="first-checkbox" {...input}/>
                                            ubrania, które nadają się do ponownego użycia
                                        </label>
                                    )}
                                </Field>
                                <Field name="firstCheckbox" type="radio" value="ubrania do wyrzucenia">
                                    {({input}) => (
                                        <label>
                                            <input type="checkbox" name="second-checkbox" {...input}/>
                                            ubrania, do wyrzucenia
                                        </label>
                                    )}
                                </Field>
                                <Field name="firstCheckbox" type="radio" value="zabawki">
                                    {({input}) => (
                                        <label>
                                            <input type="checkbox" name="third-checkbox" {...input}/>
                                            zabawki
                                        </label>
                                    )}
                                </Field>
                                <Field name="firstCheckbox" type="radio" value="książki">
                                    {({input}) => (
                                        <label>
                                            <input type="checkbox" name="fourth-checkbox" {...input}/>
                                            książki
                                        </label>
                                    )}
                                </Field>
                                <Field name="firstCheckbox" type="radio" value="Inne">
                                    {({input}) => (
                                        <label>
                                            <input type="checkbox" name="fifth-checkbox" {...input}/>
                                            Inne
                                        </label>
                                    )}
                                </Field>
                            </div>
                            <div className="error">
                                <h1>{error && "Zaznacz jedną z odpowiedzi!"}</h1>
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