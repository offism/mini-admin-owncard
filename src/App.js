import { useState } from "react";
import './style/styles.css'

function App() {
  let [count,setCount] = useState(0)
  let [toggle,setToggle] = useState(false)
  let [value,setValue] = useState("")
  
  function inc(){
    count +=1
    setCount(count)
  }
  function dec(){
    count -=1
    setCount(count)
  }
  return (
   <>
    <div className="app w-50 mx-auto">
     <h3>Count: {count}</h3>
     <button onClick={inc} className="btn btn-success">INC</button>
     <button onClick={dec} className="btn btn-danger">DEC</button>
     <button onClick={()=> setToggle(!toggle)} className="btn btn-secondary">Toggle</button>
     <hr/>
     {toggle 
     ?
     <p className="lead">You Tube Content</p>  
     : null
     }
     <h4>Value: {value}</h4>
     <input className="form-control" type="text" value={value} onChange={event => setValue(event.target.value)}/> 
    </div>    
   </>
    );
}

export default App;
