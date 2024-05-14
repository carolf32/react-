import { useEffect } from "react"
import "./assets/styles/index.scss"
import {api} from "../src/assets/services/api.js"
import {LoginPage} from "../src/assets/pages/LoginPage/index.jsx"
import {RegisterPage} from "../src/assets/pages/RegisterPage/index.jsx"
import { DashboardPage } from "./assets/pages/DashboardPage/index.jsx"
import { RoutesMain } from "./assets/routes/RoutesMain/index.jsx"
import { ToastContainer,toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  
  return (
    <>
     <RoutesMain/>
     <ToastContainer/>
    </>
  )
}

export default App
