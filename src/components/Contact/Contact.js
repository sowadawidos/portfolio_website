import React, {useState, useEffect} from "react";
import "./Contact.scss";
import decoration from "../../assets/Decoration.svg"
import {Form, Field} from 'react-final-form'

export const Contact = ({sendMessage}) => {
    const [active, setActive] = useState(false);
    return (
        <>
            <section className="contact" id="contact">
                <div className="background"/>
                <div className="contact__us">
                    <h1 className="contact__us-title">Skontaktuj się z nami</h1>
                    <img src={decoration} alt="decoration" className="decoration"/>
                    <Form
                        onSubmit={message => {
                            sendMessage(message);
                            setActive(true)
                        }}
                        validate={values => {
                            const errors = {}
                            if (!values.name) {
                                errors.name = true
                            }
                            if (!values.email) {
                                errors.email = true
                            }
                            if (!values.message || values.message.length < 120) {
                                errors.message = true
                            }
                            return errors;
                        }}>
                        {({handleSubmit}) => (
                            <form className="contact__form" onSubmit={handleSubmit}>
                                <div className="main__form">
                                    <Field name="name">
                                        {({input, meta}) => (
                                            <label>
                                                Wpisz swoje imię
                                                <input type="text" placeholder="Krzysztof" name="name" {...input}/>
                                                {
                                                    meta.error && meta.touched &&
                                                    <span className="error">Podane imię jest nieprawidłowe!</span>
                                                }
                                            </label>
                                        )}
                                    </Field>
                                    <Field name="email">
                                        {({input, meta}) => (
                                                <label>
                                                    Wpisz swój email
                                                    <input type="email" placeholder="abc@xyz.pl" name="email" {...input}/>
                                                    {
                                                        meta.error && meta.touched &&
                                                        <span className="error">Podany email jest nieprawidłowy!</span>
                                                    }
                                                </label>
                                            )}
                                    </Field>
                                </div>
                                <Field name="message">
                                    {({input, meta}) => (
                                        <label className="textarea">
                                            Wpisz swoją wiadomość
                                            <textarea name="message" {...input}
                                                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                                            {
                                                meta.error && meta.touched &&
                                                <span className="error">Wiadomość musi mieć conajmniej 120 znaków!</span>
                                            }
                                        </label>
                                        )}
                                </Field>
                                {
                                    active ?
                                        <div className="contact__button">
                                            <button disabled>Wysłano</button>
                                        </div>
                                        :
                                        <div className="contact__button">
                                            <button>Wyślij</button>
                                        </div>
                                }
                            </form>
                        )}
                    </Form>
                </div>
            </section>
        </>
    )
}