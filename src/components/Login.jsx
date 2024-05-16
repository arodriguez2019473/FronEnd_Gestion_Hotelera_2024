import { useState } from "react";
import { Logo } from "./Logo";
import { Input } from "./Input";
import {
    emailValidationMessage,
    passwordValidationMessage,
    validateEmail,
    validatePassword,
} from "../shared/validators";
import { useLogin } from "../shared/hooks";
import { Link } from "react-router-dom";

export const Login = () => {
    const { login, isLoading } = useLogin();

    const [formState, setFormState] = useState({
        correo: {
            value: "",
            isValid: false,
            showError: false,
        },
        password: {
            value: "",
            isValid: false,
            showError: false,
        },
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            },
        }));
    };

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case "correo":
                isValid = validateEmail(value);
                break;
            case "password":
                isValid = validatePassword(value);
                break;
            default:
                break;
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    };

    const handleLogin = (event) => {
        event.preventDefault()

        login(formState.correo.value, formState.password.value)
    }

    const isSubmitButtonDisabled = isLoading || !formState.password.isValid || !formState.correo.isValid
    return (
        <div className="login-container">
            <Logo text={'Login Hoteles Kinal'} />
            <form className="auth-form">
                <Input
                    field='correo'
                    label='Email'
                    value={formState.correo.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.correo.showError}
                    validationMessage={emailValidationMessage}
                />
                <Input
                    field='password'
                    label='Password'
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type='password'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                    validationMessage={passwordValidationMessage}
                />
                <button onClick={handleLogin} disabled={isSubmitButtonDisabled}>
                    Log in
                </button>
            </form>
            <Link to={`/register`}>Aun no tienes una cuenta, registrate</Link>
        </div>
    );
};