
import { useState , useRef, useEffect} from "react"
import {  Link} from "react-router-dom"
import {Days} from "../Day1"
import {nanoid} from "nanoid"


interface Task {
    nameTask: string;
    time: string ;
    category: string;
    description: string;
    checkBox : boolean;
    id : number | string ;
}

export default function Sunday() {
    const [selday, setselDay] = useState(Days);
    const [firstTask, setFirstTask] = useState(false);
    const [sunday, setSunday] = useState<Task[] | null>(null);
  
    const nameRef = useRef<HTMLInputElement>(null);
    const timeRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const checkRef = useRef<HTMLInputElement>(null);
  
    const category1Ref = useRef<HTMLInputElement>(null);
    const category2Ref = useRef<HTMLInputElement>(null);
    const category3Ref = useRef<HTMLInputElement>(null);
  
    useEffect(() => {
      const data = localStorage.getItem("list-sunday");
      if (data) {
        setSunday(JSON.parse(data));
        setFirstTask(true)
      } else {
        setSunday([]);
        setFirstTask(false)
      }
    }, []);
  
    useEffect(() => {
      if (sunday !== null) {
        localStorage.setItem("list-sunday", JSON.stringify(sunday));
      }
    }, [sunday]);
    
    const checkComplited = (id: string | number) => {
      let check 
      setSunday(elem =>
        elem!.map(elm => {
          if (elm.checkBox) {
            check = false;
          } else {
            check = true;
          }
          return elm.id === id ? { ...elm, checkBox: check } : elm;
        })
      );
    };
    
    const changeData = () => {
      const nameTask = String(nameRef.current?.value);
      const time = String(timeRef.current?.value);
      let category = "";
      const description = String(descriptionRef.current?.value);
      let checkBox:boolean
  
      if (category1Ref.current?.checked) {
        category = "Work";
      } else if (category2Ref.current?.checked) {
        category = "Hobby";
      } else if (category3Ref.current?.checked) {
        category = "Home";
      }
  
      if (checkRef.current?.checked) {
        checkBox = true;
      } else {
        checkBox = false;
      }

      if (nameTask && time && category) {
        const taskExists = sunday?.some(
          (task) => task.nameTask === nameTask && task.time === time && task.category === category
        );
        if (!taskExists) {
          setSunday([
            ...(sunday || []),
            {
              nameTask: nameTask,
              time: time,
              category: category,
              description: description,
              checkBox: checkBox,
              id: nanoid(),
            },
          ]);
          setFirstTask(true);
        } else {
          alert("Task already exists");
        }
      } else {
        alert("Fill all required fields");
      }
    };
  
   const Daydata = (sunday || []).map(element => {
    const  removeTask = (id: string | number) => {
       let filterArray = sunday?.filter(item => item.id !== id)
       setSunday(filterArray!)
    }
    return (
        <div className="data-cont">
            <ul className={element.checkBox ? "data-oftasks-checked": "data-oftasks"} title={element.description}>
                <li className="data-task-element" ><span className="data-task-element-tag">Name : </span>{element.nameTask}</li>
                <li className="data-task-element"><span className="data-task-element-tag">Category : </span>{element.category}</li>
                <li className="data-task-element"><span className="data-task-element-tag">Time : </span>{element.time}</li>
                <input type="checkbox"  ref={checkRef} name="checkBox" onClick={() => checkComplited(element.id)} checked={element.checkBox}/>
                <img src="src\assets\trash2.svg" alt="trash" className="trash-icon" onClick={() => removeTask(element.id)}/>
            </ul>
            
        </div>
    )
   })

  const Allday = selday.map(element => { 
   
    return <li className={element.name === "Sun" ? "day-btn-selected": "day-btn"} ><Link  to={element.day} >{element.name}</Link></li>
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
                    <input type="time"  name="time" className="time-input" ref={timeRef} placeholder="Time"/>
                    
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