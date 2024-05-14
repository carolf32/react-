import style from "./styles.module.scss"
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {LoginSchema} from "../../schema/LoginSchema"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const LoginPage = () => {

    const {register,handleSubmit,formState:{errors}}=useForm({resolver:zodResolver(LoginSchema)});
    const {userLogin} = useContext(UserContext)

    const submit = (formData) =>{
        userLogin(formData);
    }


    return (
        <>
            <h1 className={`title1 ${style.logo}`}>Kenzie Hub</h1>
            <div className={style.loginPage_div}>
                <h2 className="title1">Login</h2>
                <form onSubmit={handleSubmit(submit)} noValidate>
                    <label className="headlineBold">Email</label>
                    <input type="email" {...register("email")} placeholder="Digite aqui seu email" required/>
                    {errors.email? <p>{errors.email.message}</p>:null}
                    <label className="headlineBold">Senha</label>
                    <input type="password"{...register("password")} placeholder="Digite aqui sua senha" required />
                    {errors.password? <p>{errors.password.message}</p>:null}
                    <button className={`title2 ${style.btnRed}`} type="submit">Entrar</button>
                </form>
                <h3 className="headline">Ainda não possui uma conta?</h3>
                <Link to="/register" className={`title2 ${style.btnGrey}`}>Cadastre-se</Link>
            </div>
        </>
    )
}