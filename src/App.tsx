
import "./App.css"
import { Routes , Route , Navigate , Link} from "react-router-dom"
import Home from "./assets/Home"
import Mon from "./assets/Mon"

export default function App() {
    return(
        <div className="Cont">
 
            <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/day1" element={<Mon />}></Route>
                    <Route path="/day2" element={<h1>2</h1>}></Route>
                    <Route path="*" element={<Navigate to="/" />}> </Route>
            </Routes>
        </div>
    )
}