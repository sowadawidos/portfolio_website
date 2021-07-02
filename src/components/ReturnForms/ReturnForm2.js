import React, {useState} from "react";
import {Field, Form} from "react-final-form";

import "./ReturnForm.scss";

export const ReturnForm2 = ({setCurrentStep, setData, data}) => {
    const [error, setError] = useState(false);
    const handleBack = () => {
        setCurrentStep(prev => prev - 1);
    }
    return (
        <>
            <div className="form">
                <Form
                    onSubmit={(form) => {
                    if (!form.select) {
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
                                Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
                            </h1>
                            <div className="inputs">
                                <Field name="select">
                                    {({input}) => (
                                        <label>
                                            Liczba 60l worków:
                                            <select name="select" {...input}>
                                                <option value="" selected disabled>-- wybierz --</option>
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
                            <div className="error">
                                <h1>{error && "Podaj liczbę worków!"}</h1>
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