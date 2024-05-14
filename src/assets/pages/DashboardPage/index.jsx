import { useContext, useEffect, useState } from "react"
import { TechList } from "../../components/TechList"
import style from "./styles.module.scss"
import { useNavigate } from "react-router-dom"
import {CreateTechModal} from "../../components/CreateTechModal"
import { TechContext } from "../../providers/TechContext"
import { UserContext } from "../../providers/UserContext"

export const DashboardPage = () => {

    const { setCreateModalOpen, createModalOpen}= useContext(TechContext)
    const {user, setUser} = useContext(UserContext)


    const navigate=useNavigate()

    const cleanUser = () => {
        setUser("");
        navigate("/");
        localStorage.removeItem("@USER");
        localStorage.removeItem("@TOKEN");
    }

    const moduleLabels = {
        m1: "Primeiro módulo (Introdução ao Frontend)",
        m2: "Segundo módulo (Frontend Avançado)",
        m3: "Terceiro módulo (Introdução ao Backend)"
    };


    return (
        <>
            <div className={style.divContainer}>
                <div className={style.dashPage_top}>
                    <h1 className={`title1 ${style.logo}`}>Kenzie Hub</h1>
                    <button className={`title2 ${style.btn}`} onClick={cleanUser}>Sair</button>
                </div>
            </div>
            
            <div className={style.divContainer}>
                <div className={style.dashPage_middle}>
                    <h2 className="title1">Olá,{user.name}</h2>
                    <p className="headline">{moduleLabels[user.course_module]}</p>
                </div>
            </div>
            
            <div className={style.dashPage_bottom}>
                <div className={style.techs_header}>
                    <h2 className="title1">Tecnologias</h2>
                    <button className="title2" type="button" onClick={()=>setCreateModalOpen(true)}>+</button>
                    {createModalOpen ? <CreateTechModal/> : null}
                </div>
                <TechList />
            </div>
        </>
    )
}