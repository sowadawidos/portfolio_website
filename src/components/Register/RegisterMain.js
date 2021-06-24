import React, {useState, useEffect} from "react";
import decoration from "../../assets/Decoration.svg";
import {Link} from "react-router-dom";
import {Form, Field} from 'react-final-form'

export const RegisterMain = ({signUp, user}) => {
    return (
        <>
            {
                user ?
                    <div className="login__main">
                        <h1 className="login__title">Zarejestrowano i zalogowano pomyślnie</h1>
                        <img src={decoration} alt="decoration" className="login__image"/>
                        <Link to="/">
                            <button className="back__to-home">
                                Strona główna
                            </button>
                        </Link>
                    </div>
                    :
                    <div className="login__main">
                        <h1 className="login__title">Załóż konto</h1>
                        <img src={decoration} alt="decoration" className="login__image"/>
                        <Form
                            onSubmit={(user) => {
                                signUp(user.email, user.password)
                            }}
                            validate={values => {
                                const errors = {}
                                if (!values.email) {
                                    errors.email = true
                                }
                                if (!values.password) {
                                    errors.password = true
                                }
                                if (!values.password2) {
                                    errors.password2 = true
                                } else if (values.password !== values.password2) {
                                    errors.password2 = true
                                }
                                return errors;
                            }}>
                            {({handleSubmit}) => (
                                <form className="register__form" onSubmit={handleSubmit}>
                                    <div className="inputs">
                                        <Field name="email">
                                            {({input, meta}) => (
                                                <label>
                                                    E-mail
                                                    <input type="email" name="email" {...input}/>
                                                    {
                                                        // <span className="error">Niepoprawny email!</span>
                                                        meta.error && meta.touched &&
                                                        <span className="error">Niepoprawny email!</span>
                                                    }
                                                </label>
                                            )}
                                        </Field>
                                        <Field name="password">
                                            {({input, meta}) => (
                                                <label>
                                                    Hasło
                                                    <input type="password" name="password" {...input}/>
                                                    {
                                                        meta.error && meta.touched && <span
                                                            className="error">Hasło powinno składać się z co najmniej 6 znaków</span>
                                                    }
                                                </label>
                                            )}
                                        </Field>
                                        <Field name="password2">
                                            {({input, meta}) => (
                                                <label>
                                                    Powtórz hasło
                                                    <input type="password" name="password2" {...input}/>
                                                    {
                                                        meta.error && meta.touched &&
                                                        <span
                                                            className="error">Hasło różni się od podanego wyżej!</span>
                                                    }
                                                </label>
                                            )}
                                        </Field>
                                    </div>
                                    <div className="buttons">
                                        <button className="singUp">
                                            Załóż konto
                                        </button>
                                        <Link to="/logowanie">
                                            <button className="singIn">
                                                Zaloguj się
                                            </button>
                                        </Link>
                                    </div>
                                </form>
                            )}
                        </Form>
                    </div>
            }

        </>
    )
}