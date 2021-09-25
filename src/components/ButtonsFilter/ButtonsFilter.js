import { useState } from "react";
import { Link } from "react-router-dom";

const ButtonsFilter = ()=>{
  const[allIsActive,setAllIsActive] = useState(true);
  const[activeIsActive,setActiveIsActive] = useState(false);
  const[doneIsActive,setDoneIsActive] = useState(false);

  return(
    <>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <Link exact to="/">
            <button onClick={()=>{setAllIsActive(true);setActiveIsActive(false);setDoneIsActive(false)}} type="button" class={allIsActive ? "btn btn-primary" : "btn btn-light"} style={{width:'100px'}}>All</button>
        </Link>
        <Link exact to="/activetask">
            <button onClick={()=>{setAllIsActive(false);setActiveIsActive(true);setDoneIsActive(false)}} type="button" class={activeIsActive ? "btn btn-primary" : "btn btn-light"} style={{width:'100px'}}>Active</button>
        </Link>
        <Link exact to="/donetask">
            <button onClick={()=>{setAllIsActive(false);setActiveIsActive(false);setDoneIsActive(true)}} type="button" class={doneIsActive ? "btn btn-primary" : "btn btn-light"} style={{width:'100px'}}>Done</button>
        </Link>
        </div>
        
        
        
    </>
  )
}

export default ButtonsFilter;