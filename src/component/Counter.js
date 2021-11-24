import { useState } from "react/cjs/react.development"

export default function Counter(){
    let [count,setCount] = useState(0)
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
          <h3>Count: {count}</h3>
          <button onClick={inc} className="btn btn-success">INC</button>
          <button onClick={dec} className="btn btn-danger">DEC</button>
         <hr/>
        </>
    )
}