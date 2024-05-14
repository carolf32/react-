import { Route, Routes } from "react-router-dom"
import {LoginPage} from "../../pages/LoginPage"
import { DashboardPage } from "../../pages/DashboardPage"
import { RegisterPage } from "../../pages/RegisterPage"
import { useState } from "react"
import { TechProvider } from "../../providers/TechContext"

export const RoutesMain = () => {


    return(
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/dashboard" element={<TechProvider> <DashboardPage /> </TechProvider>} />
        </Routes>
    )
}