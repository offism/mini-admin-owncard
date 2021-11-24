import { useState } from "react/cjs/react.development"

export default function InputVal(){

    let [value,setValue] = useState("")
    
    return (
        <>
          <h4>Value: {value}</h4>
          <input className="form-control" type="text" value={value} onChange={event => setValue(event.target.value)}/> 
        </>
    )
}