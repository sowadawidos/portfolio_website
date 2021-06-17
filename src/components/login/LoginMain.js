import React, {useState, useEffect} from "react";
import decoration from "../../assets/Decoration.svg";
import {Link} from "react-router-dom";

export const LoginMain = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        errorEmail: false,
        errorPassword: false
    })

    const handleInputs = e => {
        const {name, value} = e.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }))
    }
    
    const handleValidation = () => {
        const formIsValid = true;
        setErrors("");
        if (user.email.length < 6) {
            setErrors(prev => ({
                ...prev,
                errorEmail: true
            }))
        }
        if (user.password.length < 6) {
            setErrors(prev => ({
                ...prev,
                errorPassword: true
            }))
        }
        return formIsValid;
    }
    const handleSubmit = event => {
        event.preventDefault();

        if (handleValidation()) {
            alert("submitted");
        }
    }

    return (
        <>
            <div className="login__main">
                <h1 className="login__title">Zaloguj się</h1>
                <img src={decoration} alt="decoration" className="login__image"/>
                <form className="login__form" onSubmit={handleSubmit}>
                    <div className="inputs">
                        <label>
                            E-mail
                            <input type="email" name="email" onChange={handleInputs}/>
                            {
                                errors.errorEmail && <span className="error">Podany email jest nieprawidłowy!</span>
                            }
                        </label>
                        <label>
                            Hasło
                            <input type="password" name="password" onChange={handleInputs}/>
                            {
                                errors.errorPassword && <span className="error">Podane hasło jest za krótkie!</span>
                            }
                        </label>
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
            </div>
        </>
    )
}