import { useContext } from "react"
import {TechContext} from "../../../providers/TechContext"
import { EditTechModal } from "../../EditTechModal"
import style from "../TechCard/styles.module.scss"

export const TechCard = ({tech}) => {

    const {editModalOpen,deleteTech, selectTechToEdit}=useContext(TechContext)

    

    return (
        <li className={style.tech}>
            <h2 className="title2">{tech.title}</h2>
            <div className={style.tech_infos}>
                <p className="headline">{tech.status}</p>
                <div className={style.tech_buttons}>
                    <button type="button" onClick={()=>selectTechToEdit(tech)}>
                        <i className="fa-solid fa-pencil"></i>
                    </button>
                    {editModalOpen ? <EditTechModal/> : null}
                    <button type="button" onClick={()=>deleteTech(tech.id)}>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
            
        </li> 
    )
}