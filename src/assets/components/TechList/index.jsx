import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"
import { TechCard } from "./TechCard"
import style from "../TechList/styles.module.scss"

export const TechList = () => {

    const {techList} = useContext(TechContext)

    return (
        <ul className={style.list}>
            {techList.map(tech => <TechCard tech={tech} key={crypto.randomUUID()}/>)}
        </ul>
    )
}