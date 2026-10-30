
import {useState,useRef} from 'react'
import './Todolist.css'

function Todolist(){
    const [task,setTask]=useState("");
    const [list,setList]=useState([]);
    const id = useRef(1);
    const [doneList, setDoneList] = useState([]);
    
    return(
        <div className="todo-container">
            <div className="todo-card">
                <h1>✓ My To-Do List</h1>
                <p className="subtitle">Organize your tasks easily.</p>

                <div className="input-group">
                    <input
                        type="text"
                        placeholder='Add new task...'
                        value={task}
                        onChange={(event)=>{
                            setTask(event.target.value)
                        }}
                    />
                    <button className="add-btn" onClick={()=>{
                        if(task.trim() === "") return;
                        const newtask={
                            id: id.current++,
                            text: task, 
                            done : false
                        }
                        setList([...list,newtask])
                        setTask("")
                    }}>＋ Add</button>
                </div>

                <h2>My Tasks ({list.length})</h2>
                
                <div className='to-do-list-done'>
                    <h1>completed tasks</h1>
                        <ul>
                            {list.map((item) => ( item.done &&
                                <li key={item.id}>
                                <span>{item.text}</span>
                                <button className="delete-btn" onClick={()=>{
                                    setList(list.filter((t) => t.id !== item.id))
                                }}>🗑 Delete</button>
                                <button className='done-btn' onClick={()=>{
                                    setList(list.map((task)=> task.id==item.id && {...task, done :!task.done } ))
                                }}>Done</button>
                                </li>))}
                        </ul>
                        

                </div>
                <div className='to-do-list-done'>
                    <h1>incompleted tasks</h1>
                        <ul>
                            {list.map((item) => (!item.done &&
                                <li key={item.id}>
                                <span>{item.text}</span>
                                <button className="delete-btn" onClick={()=>{
                                    setList(list.filter((t) => t.id !== item.id))
                                }}>🗑 Delete</button>
                                <button className='done-btn' onClick={()=>{
                                    setList(list.filter((t)=> t.id!==item.id))
                                }}>Done</button>
                                </li>))}
                        </ul>
                        
                </div>
                
                
            </div>
        </div>
    )
}

export default Todolist
