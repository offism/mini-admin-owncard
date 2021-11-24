import { useState } from "react";
import Counter from "./component/Counter";
import ToggleP from "./component/ToggleP";
import './style/styles.css'
function App() {
  let [value,setValue] = useState("")
  
  
  return (
   <>
    <div className="app w-50 mx-auto">
     <Counter/>
     <ToggleP/>
     <h4>Value: {value}</h4>
     <input className="form-control" type="text" value={value} onChange={event => setValue(event.target.value)}/> 
    </div>    
   </>
    );
}

export default App;
