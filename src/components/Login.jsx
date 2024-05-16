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
import { FaRegUserCircle } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import {Eye} from "./Eye";


export const Login = ({ switchAuthHandler }) => {
    const { login, isLoading } = useLogin();

    const [formState, setFormState] = useState({
        email: {
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
            case "email":
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

        login(formState.email.value, formState.password.value)
    }

    const isSubmitButtonDisabled = isLoading || !formState.password.isValid || !formState.email.isValid
    return (
        <div className="login-container">
            <Logo text={'Login Hoteles Kinal'} />
            <Eye/>
            <form className="auth-form">
                <div className="input-box">
                    <Input
                        field='email'
                        label='Email'
                        value={formState.email.value}
                        onChangeHandler={handleInputValueChange}
                        type='text'
                        onBlurHandler={handleInputValidationOnBlur}
                        showErrorMessage={formState.email.showError}
                    />
                    <FaRegUserCircle className="icon"/>
                    {formState.password.showError && (
                        <span className="error-message">{emailValidationMessage}</span>
                    )}
                </div>
                <div className="input-box">
                    <Input
                        field='password'
                        label='Password'
                        value={formState.password.value}
                        onChangeHandler={handleInputValueChange}
                        type='password'
                        onBlurHandler={handleInputValidationOnBlur}
                        showErrorMessage={formState.password.showError}
                        className={formState.email.showError ? 'error' : ''}
                    />
                    <CiLock className="icon"/>
                    {formState.password.showError && (
                        <span className="error-message">{passwordValidationMessage}</span>
                    )}
                </div>
                <div className="remember-forgot">
                    <label htmlFor="">
                        <input type="checkbox" /> Remember me
                    </label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button onClick={handleLogin} disabled={isSubmitButtonDisabled}>
                    Login
                </button>
                <dir className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </dir>
            </form>
            <span onClick={switchAuthHandler} className="auth-form-switch-label">
                Do not you have an account yet? Sign up...!
            </span>
        </div>
    );
};