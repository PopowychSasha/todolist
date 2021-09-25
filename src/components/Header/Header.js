import { useSelector } from "react-redux";

const Header = ()=>{
    let doneTask = useSelector(state=>state.doneTask);
    let unDoneTask = useSelector(state=>state.unDoneTask);
  return(
    <>
        <div style={{display:"flex", alignItems:"center"}}>
            <h1 style={{marginRight:'30px',fontWeight:"bold"}}>ToDoList</h1>
            <div style={{marginRight:'5px',fontWeight:"bold"}}>done={doneTask}</div>
            <div style={{fontWeight:"bold"}}>unDone={unDoneTask}</div>
        </div>
    </>
  )
}

export default Header;