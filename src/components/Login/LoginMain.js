import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Form, Field} from 'react-final-form'

import {MessageToUser} from "../MessageToUser/MessageToUser";

import decoration from "../../assets/Decoration.svg";
import {LoginError} from "../LoginError/LoginError";


export const LoginMain = ({signIn, user, blurFunction}) => {
    const [loginError, setLoginError] = useState();


    useEffect(() => {
        blurFunction(loginError);
    }, [loginError])

    return (
        <>
            {
                user ?
                    <MessageToUser message={"Zalogowano pomyślnie"}/>
                    :
                    <div className="login__main">
                        <h1 className="login__title">Zaloguj się</h1>
                        <img src={decoration} alt="decoration" className="login__image"/>
                        <Form
                            onSubmit={(user) => {
                                signIn(user.email, user.password)
                                    .catch(error => {
                                        setLoginError(error.code)
                                    })
                            }}
                            validate={values => {
                                const errors = {}
                                if (!values.email) {
                                    errors.email = true
                                }
                                if (!values.password) {
                                    errors.password = true
                                }
                                return errors;
                            }}>
                            {({handleSubmit}) => (
                                <form className="login__form" onSubmit={handleSubmit}>
                                    {
                                        loginError && <LoginError code={loginError} setLoginError={setLoginError}/>
                                    }
                                    <div className="inputs">
                                        <Field name='email'>
                                            {({input, meta}) => (
                                                <label>
                                                    E-mail
                                                    <input type="email" name="email" {...input}/>
                                                    {
                                                        meta.error && meta.touched &&
                                                        <span className="error">Podany email jest nieprawidłowy!</span>
                                                    }
                                                </label>
                                            )}
                                        </Field>
                                        <Field name='password'>
                                            {({input, meta}) => (
                                                <label>
                                                    Hasło
                                                    <input type="password" name="password" {...input}/>
                                                    {
                                                        meta.error && meta.touched &&
                                                        <span className="error">Podane hasło jest za krótkie!</span>
                                                    }
                                                </label>
                                            )}
                                        </Field>
                                    </div>
                                    <div className="buttons">
                                        <Link to="/rejestracja">
                                            <button className="singUp">
                                                Załóż konto
                                            </button>
                                        </Link>
                                        <button className="singIn">
                                            Zaloguj się
                                        </button>
                                    </div>
                                </form>
                            )}
                        </Form>
                    </div>
            }


        </>
    )
}