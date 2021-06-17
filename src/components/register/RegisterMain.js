import React, {useState, useEffect} from "react";
import decoration from "../../assets/Decoration.svg";
import {Link} from "react-router-dom";

export const RegisterMain = () => {
    const [registerUser, setRegisterUser] = useState({
        email: "",
        password: "",
        password2: ""
    })
    const [errors, setErrors] = useState({
        errorEmail: false,
        errorPassword: false,
        errorPassword2: false
    })

    const handleInputs = e => {
        const {name, value} = e.target;
        setRegisterUser(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = event => {
        event.preventDefault();
        setErrors('');
        if (registerUser.email < 6) {
            setErrors(prev => ({
                ...prev,
                errorEmail: true
            }))
        }
        if (registerUser.password.length <= 6) {
            setErrors(prev => ({
                ...prev,
                errorPassword: true
            }))
        }
        if (registerUser.password === registerUser.password2 && registerUser.password2.length <= 6) {
            setErrors(prev => ({
                ...prev,
                errorPassword2: true
            }))
        }
        if (registerUser.email && registerUser.password && registerUser.password2) {
            console.log("poprawne wszystko")
        }
    }
    console.log(registerUser)
    return (
        <>
            <div className="login__main">
                <h1 className="login__title">Załóż konto</h1>
                <img src={decoration} alt="decoration" className="login__image"/>
                <form className="register__form" onSubmit={handleSubmit}>
                    <div className="inputs">
                        <label>
                            E-mail
                            <input type="email" name="email" onChange={handleInputs}/>
                            {
                                errors.errorEmail && <span className="error">Niepoprawny email!</span>
                            }
                        </label>
                        <label>
                            Hasło
                            <input type="password" name="password" onChange={handleInputs}/>
                            {
                                errors.errorPassword && <span className="error">Hasło powinno składać się z co najmniej 6 znaków</span>
                            }
                        </label>
                        <label>
                            Powtórz hasło
                            <input type="password" name="password2" onChange={handleInputs}/>
                            {
                                errors.errorPassword2 && <span className="error">Hasło różni się od podanego wyżej!</span>
                            }
                        </label>
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
            </div>
        </>
    )
}