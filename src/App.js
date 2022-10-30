import "./styles/css/antd.css"
import "./App.css"
import ComingSoon from "./Pages/ComingSoon"
import Home from "./Pages/Home" 
import { useAppSelector } from "./redux/hooks/useAppSelector"
import { Route, Routes } from "react-router-dom"

function App() {
    const page = useAppSelector((state) => state.page)
    console.log(page.launched)
    return (
        <Routes>
            <Route path="/" element={page.launched ? <Home /> :<ComingSoon />} />

        </Routes>
    )

}

export default App
