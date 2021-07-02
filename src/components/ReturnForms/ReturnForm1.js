import React, {useState, useEffect} from "react";
import {Form, Field} from 'react-final-form';

import "./ReturnForm.scss";

export const ReturnForm1 = ({setCurrentStep, setData, data}) => {
    const [error, setError] = useState(false);

    return (
        <>
            <div className="form">
                <Form
                    onSubmit={(form) => {
                        console.log(form)
                        if (!form.firstCheckbox) {
                            setError(true);
                        } else {
                            setData(form);
                            setCurrentStep(prev => prev + 1);
                        }
                    }}
                initialValues={{
                    ...data
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
                                        <label className="radio-label">
                                            <h1>{input.checked}</h1>
                                            <input {...input} checked={input.checked} onChange={input.onChange}/>
                                            <span className="checkmark"/>
                                            <p>ubrania, które nadają się do ponownego użycia</p>
                                        </label>
                                    )}
                                </Field>
                                <Field name="firstCheckbox" type="radio" value="ubrania do wyrzucenia">
                                    {({input}) => (
                                        <label className="radio-label">
                                            <input {...input} checked={input.checked} onChange={input.onChange}/>
                                            <span className="checkmark"/>
                                            <p>ubrania, do wyrzucenia</p>
                                        </label>
                                    )}
                                </Field>
                                <Field name="firstCheckbox" type="radio" value="zabawki" >
                                    {({input}) => (
                                        <label className="radio-label">
                                            <input {...input} checked={input.checked} onChange={input.onChange}/>
                                            <span className="checkmark"/>
                                            <p>zabawki</p>
                                        </label>
                                    )}
                                </Field>
                                <Field name="firstCheckbox" type="radio" value="książki">
                                    {({input}) => (
                                        <label className="radio-label">
                                            <input {...input} checked={input.checked} onChange={input.onChange}/>
                                            <span className="checkmark"/>
                                            <p>książki</p>
                                        </label>
                                    )}
                                </Field>
                                <Field name="firstCheckbox" type="radio" value="Inne">
                                    {({input}) => (
                                        <label className="radio-label">
                                            <input {...input} checked={input.checked} onChange={input.onChange}/>
                                            <span className="checkmark"/>
                                            <p>Inne</p>
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