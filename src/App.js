import { useState } from "react";
import './style/styles.css'

function App() {
  let [count,setCount] = useState(0)
  let [toggle,setToggle] = useState(false)
  
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
     {toggle 
     ?
     <p className="lead">You Tube Content</p>  
     : null
     }
    </div>    
   </>
    );
}

export default App;
