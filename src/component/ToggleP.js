import { useState } from "react/cjs/react.development"

export default function ToggleP(){

    let [toggle,setToggle] = useState(false)
  
    return (
        <>
          <button onClick={()=> setToggle(!toggle)} className="btn btn-secondary">Toggle</button>
          {toggle 
          ?
          <p className="lead">You Tube Content</p>  
          : null
          }
        </>
    )
}