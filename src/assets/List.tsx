import { useState } from "react"
import {  Link} from "react-router-dom"
import Day1 from "./Day1"

export default function List(){
    const [selected , setSelected] = useState(false)
    const sel = () => {
        setSelected(x => !x)
    }
    return (
        <div className="Main-Conteiner">
            <nav className="nav">
                <h1 className="title">To Do List</h1>
                <ul className="day-links">
                    <li className={selected ? "day-btn-selected": "day-btn"} onClick={sel}><Link  to="/day1">Mon</Link></li>
                    <li className={selected ? "day-btn-selected": "day-btn"} onClick={sel}><Link to="/day2" >Tue</Link></li>
                    <li className={selected ? "day-btn-selected": "day-btn"} onClick={sel}><Link to="Day3">Wed</Link></li>
                    <li className={selected ? "day-btn-selected": "day-btn"} onClick={sel}><Link to="Day4">Thu</Link></li>
                    <li className={selected ? "day-btn-selected": "day-btn"} onClick={sel}><Link to="Day5">Fri</Link></li>
                    <li className={selected ? "day-btn-selected": "day-btn"} onClick={sel}><Link to="Day6">Sat</Link></li>
                    <li className={selected ? "day-btn-selected": "day-btn"} onClick={sel}><Link to="Day7" >Sun</Link></li>
            </ul>
            </nav>
        </div>
    )
}