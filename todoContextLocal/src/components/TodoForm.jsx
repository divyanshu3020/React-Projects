import { useState } from "react";
import {useTodo} from "../context/TodoContext"

function TodoForm() {

  //this state management is made up for every individual todo that will going to add into the todo array by adddTodo() function then making it empty so that it will not repeat inton the todo arrray 
  const [todo,setTodo] = useState("")

  const {addTodo} = useTodo()

  const add = (e) =>{
    e.preventDefault()

    if (!todo) return

    addTodo({todo,completed:false})
    setTodo("")
  }

    

  return (
      <form onSubmit={add} className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              value={todo}
              onChange={(e)=>setTodo(e.target.value)}
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;