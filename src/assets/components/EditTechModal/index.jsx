import { useContext } from "react"
import style from "../EditTechModal/styles.module.scss"
import { TechContext } from "../../providers/TechContext"
import {useForm} from "react-hook-form"

export const EditTechModal = () => {

    const {setEditModalOpen,updateTech, editTech} =useContext(TechContext);
    console.log(editTech)
    const {handleSubmit, register} = useForm({
        values: {
            title: editTech.title,
            status: editTech.status,
        }
    });

    const submit = (formData) =>{
        updateTech(formData)
    }

    return (
        <div role="dialog" className={style.backgroundModal}>
            <div className={style.modalBox}>
                <div className={style.edit_header}>
                    <h3 className="title2">Tecnologia Detalhes</h3>
                    <button type="button" onClick={()=>setEditModalOpen(false)}>X</button>
                </div>

                <form className={style.edit_form} onSubmit={handleSubmit(submit)}>
                    <label className="headline">Nome</label>
                    <input type="text" className="paragraph" {...register("title")}/>
                    <label className="headline">Status</label>
                    <select className="paragraph" {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <button className="title2">Salvar alterações</button>
                </form>
            </div>
            
        </div>
    )
}