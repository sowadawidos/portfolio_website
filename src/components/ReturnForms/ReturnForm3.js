import React, {useState, useEffect} from "react";
import {Field, Form} from "react-final-form";

export const ReturnForm3 = ({setCurrentStep, setStepsData}) => {
    return (
        <>
            <div className="form">
                <Form onSubmit={(form) => {
                    setStepsData(prev => ({
                        ...prev,
                        THIRD_FORM: form
                    }))
                    setCurrentStep(prev => prev + 1)
                }}>
                    {({handleSubmit}) => (
                        <form className="form__main" onSubmit={handleSubmit}>
                            <h1 className="form__main-title">
                                Lokalizacja
                                <Field name="localization">
                                    {({input}) => (
                                        <label>
                                            <select name="localization" {...input}>
                                                <option selected disabled defaultValue='0'>-- wybierz --</option>
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
                                    <Field name="first-checkbox" type="checkbox">
                                        {({input}) => (
                                            <label>
                                                <input type="checkbox" name="first-checkbox" value="dzieciom" {...input}/>
                                                dzieciom
                                            </label>
                                        )}
                                    </Field>
                                    <Field name="second-checkbox" type="checkbox">
                                        {({input}) => (
                                            <label>
                                                <input type="checkbox" name="second-checkbox" value="samotnym matkom" {...input}/>
                                                samotnym matkom
                                            </label>
                                        )}
                                    </Field>
                                    <Field name="third-checkbox" type="checkbox">
                                        {({input}) => (
                                            <label>
                                                <input type="checkbox" name="third-checkbox" {...input} value="bezdomnym"/>
                                                bezdomnym
                                            </label>
                                        )}
                                    </Field>
                                    <Field name="fourth-checkbox" type="checkbox">
                                        {({input}) => (
                                            <label>
                                                <input type="checkbox" name="fourth-checkbox" value="niepełnosprawnym" {...input}/>
                                                niepełnosprawnym
                                            </label>
                                        )}
                                    </Field>
                                    <Field name="fifth-checkbox" type="checkbox">
                                        {({input}) => (
                                            <label htmlFor="">
                                                <input type="checkbox" name="fifth-checkbox" value="osobom starszym" {...input}/>
                                                osobom starszym
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