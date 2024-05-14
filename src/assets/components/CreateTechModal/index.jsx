import { useContext } from "react"
import style from "../CreateTechModal/styles.module.scss"
import { TechContext } from "../../providers/TechContext"
import {useForm} from "react-hook-form"

export const CreateTechModal = () => {

    const {setCreateModalOpen, addTech} = useContext(TechContext)
    const {handleSubmit, register, reset}=useForm()

    const submit=(payload) => {
        addTech(payload);
        reset();
    }

    return (
        <div role="dialog" className={style.backgroundModal}>
            <div className={style.modalBox}>
                <div className={style.modal_header}>
                    <h3 className="title2">Cadastrar Tecnologia</h3>
                    <button type="button" onClick={()=>setCreateModalOpen(false)}>X</button>
                </div>
                <form onSubmit={handleSubmit(submit)} className={style.createTechForm}>
                    <label className="headline">Nome</label>
                    <input type="text" className="paragraph" required {...register("title")}/>
                    <label className="headline">Selecionar status</label>
                    <select className="paragraph" {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <button type="submit" className="title2">Cadastrar Tecnologia</button>
                </form>
            </div>
            
        </div>
    )
}