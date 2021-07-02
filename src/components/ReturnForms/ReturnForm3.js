import React, {useState} from "react";

import {Field, Form} from "react-final-form";

export const ReturnForm3 = ({setCurrentStep, setData, data}) => {
    const [error, setError] = useState(false);
    const handleBack = () => {
        setCurrentStep(prev => prev - 1);
    }
    return (
        <>
            <div className="form">
                <Form
                    onSubmit={(form) => {
                    if (!form.localization || !form.thirdCheckbox) {
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
                                Lokalizacja
                                <Field name="localization">
                                    {({input}) => (
                                        <label>
                                            <select name="localization" {...input}>
                                                <option value="" selected disabled>-- wybierz --</option>
                                                <option value="Poznań">Poznań</option>
                                                <option value="Warszawa">Warszawa</option>
                                                <option value="Kraków">Kraków</option>
                                                <option value="Wrocław">Wrocław</option>
                                                <option value="Katowice">Katowice</option>
                                            </select>
                                        </label>
                                    )}
                                </Field>
                            </h1>
                            <div className="inputs">
                                <h1 className="form__main-title smaller">
                                    Komu chcesz pomóc?
                                </h1>
                                <div className="who-helps">
                                    <Field name="thirdCheckbox" type="radio" value="dzieciom">
                                        {({input}) => (
                                            <label className="radio-label">
                                                <input type="checkbox" name="first-checkbox" value="dzieciom" {...input}/>
                                                <span className="checkmark"/>
                                                <p>dzieciom</p>
                                            </label>
                                        )}
                                    </Field>
                                    <Field name="thirdCheckbox" type="radio" value="samotnym matkom">
                                        {({input}) => (
                                            <label className="radio-label">
                                                <input type="checkbox" name="second-checkbox" value="samotnym matkom" {...input}/>
                                                <span className="checkmark"/>
                                                <p>samotnym matkom</p>
                                            </label>
                                        )}
                                    </Field>
                                    <Field name="thirdCheckbox" type="radio" value="bezdomnym">
                                        {({input}) => (
                                            <label className="radio-label">
                                                <input type="checkbox" name="third-checkbox" {...input} value="bezdomnym"/>
                                                <span className="checkmark"/>
                                                <p>bezdomnym</p>
                                            </label>
                                        )}
                                    </Field>
                                    <Field name="thirdCheckbox" type="radio" value="niepełnosprawnym">
                                        {({input}) => (
                                            <label className="radio-label">
                                                <input type="checkbox" name="fourth-checkbox" value="niepełnosprawnym" {...input}/>
                                                <span className="checkmark"/>
                                                <p>niepełnosprawnym</p>
                                            </label>
                                        )}
                                    </Field>
                                    <Field name="thirdCheckbox" type="radio" value="osobom starszym">
                                        {({input}) => (
                                            <label className="radio-label">
                                                <input type="checkbox" name="fifth-checkbox" value="osobom starszym" {...input}/>
                                                <span className="checkmark"/>
                                                <p>osobom starszym</p>
                                            </label>
                                        )}
                                    </Field>
                                </div>
                                <h1 className="form__main-title smaller">
                                    Wpisz nazwę konkretnej organizacji (opcjonalnie)
                                </h1>
                                <Field name="organization-name" type="text">
                                    {({input}) => (
                                        <label>
                                            <input type="text" name="fifth-checkbox" {...input}/>
                                        </label>
                                    )}
                                </Field>
                            </div>
                            <div className="error">
                                <h1>{error && "Wybierz lokalizację oraz komu chcesz pomóc!"}</h1>
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