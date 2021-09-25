import {useSelector} from "react-redux";
import DoneTaskList from "../../components/DoneTaskList/DoneTaskList";

const DoneTaskPage = ()=>{
  const tasks = useSelector(state=>state.tasks);

  return(
    <DoneTaskList tasks={tasks}/>
  )
}

export default DoneTaskPage;