import { useState } from "react";
import './task.css'
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

const AddTask=()=>{

    const[text,setText]=useState("");
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addTask(text))
        setText("");

    }
return(
    <form onSubmit={handleSubmit} className="form">
        <input 
        placeholder='add a task'
        value={text}
        onChange={(e)=>setText(e.target.value)}
        className="input"/>
        <button type='submit'className="button">Add</button>

    </form>
)
}
export default AddTask;