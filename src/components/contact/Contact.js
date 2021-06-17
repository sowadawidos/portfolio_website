import React, {useState, useEffect} from "react";
import "./Contact.scss";
import decoration from "../../assets/Decoration.svg"
import API from "../API/API";

export const Contact = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [errors, setErrors] = useState({
        errorName: false,
        errorEmail: false,
        errorMessage: false
    })

    const handleInputs = e => {
        const {name, value} = e.target;
        setInputs(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = event => {
        event.preventDefault();
        setErrors("");
        if (inputs.name.length < 3) {
            setErrors(prev => ({
                ...prev,
                errorName: true
            }))
        }
        if (inputs.email.length < 8) {
            setErrors(prev => ({
                ...prev,
                errorEmail: true
            }))
        }
        if (inputs.message.length <= 120) {
            setErrors(prev => ({
                ...prev,
                errorMessage: true
            }))
        } else {
            fetch(`${API}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputs),
            })
                .then(response => response.json())
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }

    return (
        <>
            <section className="contact" id="contact">
                <div className="background"/>
                <div className="contact__us">
                    <h1 className="contact__us-title">Skontaktuj się z nami</h1>
                    <img src={decoration} alt="decoration" className="decoration"/>
                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="main__form">
                            <label>
                                Wpisz swoje imię
                                <input type="text" placeholder="Krzysztof" name="name" onChange={handleInputs}/>
                                {
                                    errors.errorName && <span className="error">Podane imię jest nieprawidłowe!</span>
                                }
                            </label>
                            <label>
                                Wpisz swój email
                                <input type="email" placeholder="abc@xyz.pl" name="email" onChange={handleInputs}/>
                                {
                                    errors.errorEmail && <span className="error">Podany email jest nieprawidłowy!</span>
                                }
                            </label>
                        </div>
                        <label className="textarea">
                            Wpisz swoją wiadomość
                            <textarea name="message" onChange={handleInputs} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                            {
                                errors.errorMessage && <span className="error">Wiadomość musi mieć conajmniej 120 znaków!</span>
                            }
                        </label>
                        <div className="contact__button">
                            <button>Wyślij</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}