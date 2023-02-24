import { useState } from "react"
import {  Link} from "react-router-dom"
import {Days} from "./Day1"

export default function Home(){
    const [selday , setselDay] = useState(Days)

  const Allday = selday.map(element => { 


    return <li className="day-btn"><Link  to={element.day}>{element.name}</Link></li>
   });
    return (
        <>
        <div className="Main-Conteiner">
            <div className="Main-Conteiner-Nav">
                <nav className="nav">
                    <h1 className="title">To Do List</h1>
                    <ul className="day-links">
                        {Allday}
                    </ul>
                </nav>
            </div>
            
            <div className="home">
                <p className="home-title">Choose your day</p>
            </div>
        </div>
         <div className="Main-Conteiner-note">
            <p className="note-title">Make your plan </p>
         </div>
         </>
    )
}