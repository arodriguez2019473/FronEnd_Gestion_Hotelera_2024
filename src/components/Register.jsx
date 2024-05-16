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
import { Link } from "react-router-dom";

export const Register = () => {
    const { register, isLoading } = useRegister();

    const [formState, setFormState] = useState({
        nombre: {
            value: "",
            isValid: false,
            showError: false,
        },
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
            case "nombre":
                isValid = validateUsername(value);
                break;
            case "correo":
                isValid = validateEmail(value);
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
        console.log(formState, "asd")
        register(
            formState.nombre.value,
            formState.correo.value,
            formState.password.value,
        );
    };

    const isSubmitButtonDisabled =
        isLoading ||
        !formState.password.isValid ||
        !formState.correo.isValid ||
        !formState.nombre.isValid ||
        !formState.passwordConfir.isValid;

    return (
        <div className="register-container">
            <Logo text={"Register to Kinal Cast"} />
            <form className="auth-form">
                <Input
                    field="nombre"
                    label="Username"
                    value={formState.nombre.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.correo.showError}
                    validationMessage={validateUsernameMessage}
                />
                <Input
                    field="correo"
                    label="Email"
                    value={formState.correo.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.correo.showError}
                    validationMessage={emailValidationMessage}
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
            <Link to={`/auth`}>
                ¿Ya tienes una cuenta? ¡Inicia sesión acá...!
            </Link>
        </div>
    );
};