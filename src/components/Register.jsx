import { useState } from "react";
import { Logo } from "./Logo";
import { Input } from "./Input";
import {
    emailValidationMessage,
    passwordValidationMessage,
    passwordConfirmationMessage,
    validateUsernameMessage,
    validatePasswordConfir,
    validateUsername,
    validateEmail,
    validatePassword,
} from "../shared/validators";
import { useRegister } from "../shared/hooks";

export const Register = ({ switchAuthHandler }) => {
    const { register, isLoading } = useRegister();

    const [formState, setFormState] = useState({
        correo: {
            value: "",
            isValid: false,
            showError: false,
        },
        username: {
            value: "",
            isValid: false,
            showError: false,
        },
        password: {
            value: "",
            isValid: false,
            showError: false,
        },
        passwordConfir: {
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
            case "username":
                isValid = validateUsername(value);
                break;
            case "password":
                isValid = validatePassword(value);
                break;
            case "passwordConfir":
                isValid = validatePasswordConfir(formState.password.value, value);
                break;
            default:
                break;
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid,
            },
        }));
    };

    const handleRegister = (event) => {
        event.preventDefault();
        console.log(formState)
        register(
            formState.correo.value,
            formState.password.value,
            formState.username.value
        );
    };

    const isSubmitButtonDisabled =
        isLoading ||
        !formState.password.isValid ||
        !formState.correo.isValid ||
        !formState.username.isValid ||
        !formState.passwordConfir.isValid;

    return (
        <div className="register-container">
            <Logo text={"Register to Kinal Cast"} />
            <form className="auth-form">
                <Input
                    field="correo"
                    label="Correo"
                    value={formState.correo.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.correo.showError}
                    validationMessage={emailValidationMessage}
                />
                <Input
                    field="username"
                    label="Username"
                    value={formState.username.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.username.showError}
                    validationMessage={validateUsernameMessage}
                />
                <Input
                    field="password"
                    label="Password"
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                    validationMessage={passwordValidationMessage}
                />
                <Input
                    field="passwordConfir"
                    label="Password Confirmation"
                    value={formState.passwordConfir.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.passwordConfir.showError}
                    validationMessage={passwordConfirmationMessage}
                />
                <button onClick={handleRegister} disabled={isSubmitButtonDisabled}>
                    Register
                </button>
            </form>
            <span onClick={switchAuthHandler} className="auth-form-switch-label">
                ¿Ya tienes una cuenta? ¡Inicia sesión acá...!
            </span>
        </div>
    );
};