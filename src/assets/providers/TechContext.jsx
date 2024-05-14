import { useEffect, useState } from "react";
import { createContext } from "react";
import {api} from "../services/api.js"

export const TechContext = createContext({});

export const TechProvider = ({children}) => {

    const [techList, setTechList] = useState([]);
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false)
    const token = localStorage.getItem("@TOKEN")
    const [editTech, setEditTech] = useState(null);

      useEffect(()=>{
        const getTechs = async () => {
            try {
                const {data} = await api.get("/profile",{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                setTechList(data.techs)
            } catch (error) {
                console.log(error)
            }
        }
        getTechs();
    },[])
    

    const addTech = async (payload) => {
        try {
            const {data}=await api.post("/users/techs", payload, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTechList([...techList,data])            
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTech = async (removingId) => {
        try {
            await api.delete(`/users/techs/${removingId}`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });
            const newTechList = techList.filter(tech => tech.id !== removingId)
            setTechList(newTechList)

        } catch (error) {
            console.log(error)
        }
    }

    const selectTechToEdit = (tech) =>{
        setEditTech(tech);
        setEditModalOpen(true);
        
    }

    const updateTech = async (formData) =>{
        try {
            const {data} = await api.put(`/users/techs/${editTech.id}`,formData,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })

            const newTechList = techList.map(tech =>{
                if(tech.id ===editTech.id){
                    return data
                } return tech
            })

            setTechList(newTechList)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TechContext.Provider value={{techList, setTechList, setCreateModalOpen,
        createModalOpen, editModalOpen, setEditModalOpen, addTech, deleteTech,
        selectTechToEdit, updateTech, editTech}}>
            {children}
        </TechContext.Provider>
    )
}