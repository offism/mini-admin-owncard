import { useState } from "react";
import Counter from "./component/Counter";
import InputVal from "./component/InputVal";
import ToggleP from "./component/ToggleP";
import './style/styles.css'
function App() {

  return (
   <>
    <div className="app w-50 mx-auto">
     <Counter/>
     <ToggleP/>
     <hr/>
     <InputVal/>
    </div>    
   </>
    );
}

export default App;
