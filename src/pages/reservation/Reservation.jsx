import { useState } from 'react';
import { Input } from '../../components/Input';
import { useReservation } from '../../shared/hooks/useReservation';
import './reservation.css'

export const Reservation = () => {
    const { addReservation, isLoading } = useReservation();

    const [formState, setFormState] = useState({
        dateStart: {
            value: '',
            isValid: false,
            showError: false
        },
        dateFinish: {
            value: '',
            isValid: false,
            showError: false
        },
        huespedes: {
            value: 0,
            isValid: false,
            showError: false
        },
        listService: {
            value: '',
            isValid: false,
            showError: false
        }
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case 'dateStart':
            case 'dateFinish':
                isValid = value.length > 0;
                break;
            case 'huespedes':
                isValid = value > 0;
                break;
            case 'listService':
                isValid = value.length > 0;
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
    }

    const handleAddReservation = async (event) => {
        event.preventDefault();
        const { dateStart, dateFinish, huespedes, listService } = formState;
        const response = await addReservation(dateStart.value, dateFinish.value, huespedes.value, listService.value);
        // Recargar la página después de agregar una reservación con éxito
        window.location.reload();
    }

    const isSubmitButtonDisabled = isLoading || !formState.dateStart.isValid || !formState.dateFinish.isValid || !formState.huespedes.isValid || !formState.listService.isValid;

    return (
        <div className="add-reservation-container">
            <form className="add-reservation-form">
                <Input
                    field='dateStart'
                    label='Fecha de inicio'
                    value={formState.dateStart.value}
                    onChangeHandler={handleInputValueChange}
                    type='date'
                    onBlurHandler={handleInputValidationOnBlur}
                    className="input-field"
                />
                <Input
                    field='dateFinish'
                    label='Fecha de fin'
                    value={formState.dateFinish.value}
                    onChangeHandler={handleInputValueChange}
                    type='date'
                    onBlurHandler={handleInputValidationOnBlur}
                    className="input-field"
                />
                <Input
                    field='huespedes'
                    label='Número de huéspedes'
                    value={formState.huespedes.value}
                    onChangeHandler={handleInputValueChange}
                    type='number'
                    onBlurHandler={handleInputValidationOnBlur}
                    className="input-field"
                />
                <Input
                    field='listService'
                    label='Lista de servicios'
                    value={formState.listService.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    className="input-field"
                />
                <br />
                <br />
                <div className="button-container">
                    <button className="add-reservation-bt" onClick={handleAddReservation} disabled={isSubmitButtonDisabled}>
                        Agregar Reservación
                    </button>
                    <button className="cancel-reservation-bt" onClick={() => window.location.href = '/dashboard'}>
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
}