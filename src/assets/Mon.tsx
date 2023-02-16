
import { useState , useRef, useEffect} from "react"
import {  Link} from "react-router-dom"
import {Days} from "./Day1"

interface Task {
    nameTask: string;
    time: number ;
    category: string;
    description: string;
}

export default function Home(){
    const [selday , setselDay] = useState(Days)
    const [firstTask , setFirstTask] = useState(false)
    const [monday , setMonday] = useState<Task[]>([])
   
    const nameRef = useRef<HTMLInputElement>(null)    
    const timeRef = useRef<HTMLInputElement>(null)    
    const categoryRef = useRef<HTMLInputElement>(null)    
    const descriptionRef = useRef<HTMLInputElement>(null)    

    const [data, setData] = useState([]);

    useEffect(() => {
    localStorage.setItem('list', JSON.stringify(monday));
    }, [monday]);   
    
    
  
    const changeData = ()=> {  
          
            const nameTask =  String(nameRef.current?.value);
            const time = Number(timeRef.current?.value);
            const category = String(categoryRef.current?.value);
            const description = String(descriptionRef.current?.value); 

        setMonday(
            [ ...monday,   {
                nameTask: nameTask,
                time:   time,
                category: category,
                description: description,
             },
            ] )
       
        setFirstTask(true)
       
    }
    
   console.log(monday)
   

    let x:boolean 
   selday.map(ele => x = ele.checked)
   
   
   
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
                <div>
                    <p className="name-task">Name of Task</p>
                    <input type="text" className="task-input"  placeholder="Task" ref={nameRef}/>
                </div>
                <div>
                    <p className="name-time">What time ?</p>
                    <input type="number" className="time-input" ref={timeRef} placeholder="Time"/>
                    
                </div>
            </div>
            <p className="name-category">Select the Category</p>
            <div>
                <ul className="list-category">
                    <li className="item-catergory">
                        <input type="radio" value="work" ref={categoryRef }/>
                        <label htmlFor="category-work" className="name-item" >Work</label>
                    </li>
                    <li className="item-catergory">
                        <input type="radio" value="hobby" ref={categoryRef } />
                        <label htmlFor="category-hobby" className="name-item">Hobby</label>
                    </li>
                    <li className="item-catergory">
                        <input type="radio" value="home" ref={categoryRef } />
                        <label htmlFor="category-home" className="name-item">Home</label>
                    </li>
                </ul>
                
            </div>
            <div>
                <p className="name-category">Task Description</p>
                <input placeholder="Description of the Task" className="text-area-task" ref={descriptionRef}></input>
            </div>  
            <button className="task-btn" onClick={changeData} >Add Task</button>
            
        </div>
         <div className="Main-Conteiner-note">
          
           { firstTask ? 
           <div>
                <div className="note-category-cont">
                    <p className="note-catergory-name">Task Name</p>
                    <p className="note-catergory-name">Catergory</p>
                    <p className="note-catergory-name">Time</p>
                    
                </div>
                
                
           </div> 
           : 
           <p className="note-title">Add your first task </p>}
           
         </div>
         </>
    )
}