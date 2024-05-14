import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api.js"


export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const navigate = useNavigate();
    const [user,setUser] = useState(null)

    const userRegister = async (formData) => {
        try {
            const {data} = await api.post("/users", formData);
            navigate("/")
            toast.success("Conta criada com sucesso!")
        } catch (error) {
            toast.error("Ops! Algo deu errado")
        }
    }

    const userLogin = async (formData) => {
        try {
            const {data} = await api.post("/sessions", formData);
            console.log(data)
            setUser(data.user);

            localStorage.setItem("@TOKEN",data.token);
            localStorage.setItem("@USER",data.user);
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <UserContext.Provider value={{userRegister,userLogin, user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}