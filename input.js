import React , {useState} from 'react'
import Item from './Item'
import style from './input.module.css'

function Input() {

  const [task,setTask] =  useState("")
  
  const [add,setAdd]=useState([])


  //  const change=(e)=> {
    
  //   }
   
  return (
    <div>
      <form > 
        <input nameClass={style.input} onChange={(e)=>setTask(e.target.value)} value={task} type="text" />
        <button nameClass={style.btn} type="submit" onClick={(e)=>{
e.preventDefault()
setAdd([...add,task])
setTask("")
        }}>Add</button>
        {/* <p>{add}</p> */}
      </form>
      {add.map(item=><Item key={item} item={item}/>
      )}
    </div>
  )
}

export default Input
