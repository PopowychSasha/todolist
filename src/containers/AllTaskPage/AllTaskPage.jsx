import { useState } from "react";
import { useSelector } from "react-redux";
import AllTaskList from "../../components/AllTaskList/AllTaskList";

/* import InputFilter from "../../components/InputFilter/InputFilter"; */

const AllTaskPage = ()=>{
  
  const[allTaskListInputValue,setAllTaskListInputValue] = useState('');
  const tasks = useSelector(state=>state.tasks);

  return(
    <div>
        <input class="form-control" onChange={(e)=>{
          
          if(tasks.length==0)
          {
              alert('Задач немає,що ви вирішили пошукати???');
          }
          else{
            setAllTaskListInputValue(e.target.value);

          }

        }} placeholder="find task..." value={allTaskListInputValue}/> <br/><br/>
        <AllTaskList allTaskListInputValue={allTaskListInputValue} tasks={tasks}/>
    </div>
  )
}

export default AllTaskPage;