
import "./App.css"
import { Routes , Route , Navigate , Link} from "react-router-dom"
import Home from "./assets/Home"
import Mon from "./assets/Days/Mon"
import Tue from "./assets/Days/Tue"
import Wed from "./assets/Days/Wed"
import Thu from "./assets/Days/Thu"
import Fri from "./assets/Days/Fri"
import Sat from "./assets/Days/Sat"
import Sun from "./assets/Days/Sun"

export default function App() {
    return(
        <div className="Cont">
 
            <Routes>
                    <Route path="/" element={<Home  />}></Route>
                    <Route path="/day1" element={<Mon />}></Route>
                    <Route path="/day2" element={<Tue />}></Route>
                    <Route path="/day3" element={<Wed />}></Route>
                    <Route path="/day4" element={<Thu />}></Route>
                    <Route path="/day5" element={<Fri />}></Route>
                    <Route path="/day6" element={<Sat />}></Route>
                    <Route path="/day7" element={<Sun />}></Route>
                    <Route path="*" element={<Navigate to="/" />}> </Route>
            </Routes>
        </div>
    )
}