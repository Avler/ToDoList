import { useState } from "react"
import {  Link} from "react-router-dom"
import {Days} from "./Day1"

export default function Home(){
    const [selday , setselDay] = useState(Days)

    
   
    let x:boolean 
   selday.map(ele => x = ele.checked)
   
   const handleDay = () => {
    if(x === true) {
        return
    }
    else {

    }
   }
   
    const sel = (id:number | string) => {
     let select:boolean 
    
     setselDay(ele => ele.map(elem => {
        if(elem.selected === false) {
            select = true
        }
        else {
            select = false
        }
        return elem.id === id ? {...elem , selected:select , } : {...elem , selected:false}
     }))
    }

  const Allday = selday.map(element => { 

    return <li className={element.selected ? "day-btn-selected": "day-btn"} onClick={() => sel(element.id)}><Link  to="/day1">{element.name}</Link></li>
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
                <input type="text" />
            </div>
        </div>
         <div className="Main-Conteiner-note">
            <p className="note-title">Make your plan </p>
         </div>
         </>
    )
}