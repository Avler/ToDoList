
import { useState , useRef, useEffect} from "react"
import {  Link} from "react-router-dom"
import {Days} from "./Day1"
import {nanoid} from "nanoid"

interface Task {
    nameTask: string;
    time: number ;
    category: string;
    description: string;
    checkBox : string ;
    id : number | string ;
}

export default function Home(){
    const [selday , setselDay] = useState(Days)
    const [firstTask , setFirstTask] = useState(false)
    const [monday , setMonday] = useState<Task[]>([])
   
    const nameRef = useRef<HTMLInputElement>(null)    
    const timeRef = useRef<HTMLInputElement>(null)        
    const descriptionRef = useRef<HTMLInputElement>(null) 
    const checkRef = useRef<HTMLInputElement>(null)   

    const category1Ref = useRef<HTMLInputElement>(null) 
    const category2Ref = useRef<HTMLInputElement>(null) 
    const category3Ref = useRef<HTMLInputElement>(null) 

    const [data, setData] = useState([]);
    const [checked , setChecked] = useState(false)

    useEffect(() => {
    localStorage.setItem('list', JSON.stringify(monday));
    }, [monday]);   
    
    useEffect(() => {
        const data = localStorage.getItem('list')
        if (monday !== null) setMonday(JSON.parse(data))
    }, [])

    const checkComplited = (id: string | number) => {
        let check = ""
        setMonday(elem => elem.map(elm => {
            if(elm.checkBox) {
                check = ""
            } else {
                check = "true"
            }
            return elm.id === id ? {...elm , checkBox: check} : elm
        }))
     }
  console.log(monday)
    const changeData = ()=> {  
          
            const nameTask =  String(nameRef.current?.value);
            const time = Number(timeRef.current?.value);
            let category = ''
            const description = String(descriptionRef.current?.value); 
            let checkBox = ""

            if (category1Ref.current?.checked) {
                category = 'Work'
            } else if (category2Ref.current?.checked) {
                category = 'Hobby'
            } else if (category3Ref.current?.checked) {
                category = 'Home'
            }

            if (checkRef.current?.checked) {
                checkBox = "true"
            } else {
                checkBox = ""
            }
            if (nameTask && time && category ) {
                setMonday(
                    [ ...monday,   {
                        nameTask: nameTask,
                        time:   time,
                        category: category,
                        description: description,
                        checkBox: checkBox,
                        id: nanoid()
                     },
                    ] )
               
                setFirstTask(true)
            }
            else {
                alert("Fill all required fields")
            }
        
       
    }
  
   const Daydata = monday.map (element => {
      
    return (
        <div className="data-cont">
            <ul className={element.checkBox ? "data-oftasks-checked": "data-oftasks"}>
                <li className="data-task-element"><span className="data-task-element-tag">Name : </span>{element.nameTask}</li>
                <li className="data-task-element"><span className="data-task-element-tag">Category : </span>{element.category}</li>
                <li className="data-task-element"><span className="data-task-element-tag">Time : </span>{element.time}</li>
                <input type="checkbox"  ref={checkRef} name="checkBox" onClick={() => checkComplited(element.id)}/>
            </ul>
            
        </div>
    )
   })

  const Allday = selday.map(element => { 
  

    return <li className={element.name === "Mon" ? "day-btn-selected": "day-btn"} ><Link  to={element.day} >{element.name}</Link></li>
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
                        <input type="radio" value="work" ref={category1Ref } name="optionCat"/>
                        <label htmlFor="category-work" className="name-item" >Work</label>
                    </li>
                    <li className="item-catergory">
                        <input type="radio" value="hobby" ref={category2Ref } name="optionCat"/>
                        <label htmlFor="category-hobby" className="name-item">Hobby</label>
                    </li>
                    <li className="item-catergory">
                        <input type="radio" value="home" ref={category3Ref } name="optionCat"/>
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
                    <p className="note-catergory-name">Task List</p>
                </div>
                
                {Daydata}
           </div> 
           : 
           <p className="note-title">Add your first task </p>}
           
         </div>
         </>
    )
}