import style from "./styles.module.scss"
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {FormSchema} from "../../schema/FormSchema"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";



export const RegisterPage = () => {

    const {register,handleSubmit, formState:{errors}}=useForm({resolver:zodResolver(FormSchema)})
    const {userRegister} = useContext(UserContext)

    const submit = (formData) => {
        userRegister(formData);
        navigate("/")
        toast.success("Conta criada com sucesso!")
    }



    return (
        <div>
            <div className={style.registerPage_topDiv}>
                <h1 className={`title1 ${style.logo}`}>Kenzie Hub</h1>
                <Link className={`title2 ${style.btn}`} to="/">Voltar</Link>
            </div>
            
            <div className={style.registerPage_bottomDiv}>
                <div className={style.registerPage_info}>
                    <h2 className="title1">Crie sua conta</h2>
                    <h3 className="headline">Rápido e grátis, vamos nessa</h3>
                </div>
                
                <form onSubmit={handleSubmit(submit)} noValidate>
                    <label className="headlineBold">Nome</label>
                    <input type="text"{...register("name")} placeholder="Digite aqui seu nome" required/>
                    {errors.name ? <p>{errors.name.message}</p> : null}
                    <label className="headlineBold">Email</label>
                    <input type="email" {...register("email")} placeholder="Digite aqui seu email" required/>
                    {errors.email ? <p>{errors.email.message}</p> : null}
                    <label className="headlineBold">Senha</label>
                    <input type="password"{...register("password")} placeholder="Digite aqui sua senha" required/>
                    {errors.password ? <p>{errors.password.message}</p> : null}
                    <label className="headlineBold">Confirmar senha</label>
                    <input type="password" {...register("confirmPassword")} placeholder="Confirme sua senha" required/>
                    {errors.confirmPassword ? <p>{errors.confirmPassword.message}</p> : null}
                    <label className="headlineBold">Bio</label>
                    <input type="text" {...register("bio")} placeholder="Fale sobre você" required/>
                    {errors.bio ? <p>{errors.bio.message}</p> : null}
                    <label className="headlineBold">Contato</label>
                    <input type="text" {...register("contact")} placeholder="Opção de contato" required/>
                    {errors.contact ? <p>{errors.contact.message}</p> : null}
                    <label className="headlineBold">Selecionar módulo</label>
                    <select required {...register("course_module")}>
                        <option value="m1">Primeiro módulo</option>
                        <option value="m2">Segundo módulo</option>
                        <option value="m3">Terceiro módulo</option>
                    </select>
                    {errors.course_module ? <p>{errors.course_module.message}</p> : null}
                    <button className={`title2 ${style.btnRed}`} type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}