export const validateEmail = (correo) => {
    const regex = /\S+@\S+\.\S+/

    return regex.test(correo)
}

export const emailValidationMessage = 'Por favor ingrese una dirección de correo válida.'