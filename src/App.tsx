import List from "./assets/List"
import Note from "./assets/Note"
import "./App.css"
import { Routes , Route , Navigate , Link} from "react-router-dom"
import Day1 from "./assets/Day1"

export default function App() {
    return(
        <div className="Cont">
         
            <List />
            <Note />
            
            <Routes>
                    <Route path="/" element={<h1>Hi</h1>}></Route>
                    <Route path="/day1" element={<Day1 />}></Route>
                    <Route path="/day2" element={<Day1 />}></Route>
                    <Route path="*" element={<Navigate to="/" />}> </Route>
            </Routes>
        </div>
    )
}