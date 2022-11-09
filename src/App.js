import "./styles/css/antd.css"
import "./App.css"
import ComingSoon from "./Pages/ComingSoon"
import BetPlace from "./Pages/BetPlace"
import Home from "./Pages/Home" 
import { useAppSelector } from "./redux/hooks/useAppSelector"
import { Route, Routes, Navigate } from "react-router-dom"

function App() {
    const page = useAppSelector((state) => state.page)
    return (
        <Routes>
            <Route path="/" element={page.launched ? <Home /> : <ComingSoon />} />
            <Route path="/betPlace" element={<BetPlace />} />
            <Route path='' element={<Navigate to='/' />} />
			<Route path='*' element={<Navigate to='/' />} />
        </Routes>
    )

}

export default App
