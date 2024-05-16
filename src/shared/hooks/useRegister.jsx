import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { register as registerRequest } from "../../services/api"
import toast from "react-hot-toast"

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const register = async(nombre, correo, password, ) =>{
        setIsLoading(true)

        const response = await registerRequest({
            correo,
            nombre,
            password
        })

        navigate('/auth')
    }
    return {
        register,
        isLoading
    }
}