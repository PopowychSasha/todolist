import { useSelector } from "react-redux";
import ActiveTaskList from "../../components/ActiveTaskList/ActiveTaskList";

const ActiveTaskPage = ()=>{

  const tasks = useSelector(state=>state.tasks);
  
  return(
    <ActiveTaskList tasks={tasks}/>
  )
}

export default ActiveTaskPage;