import { useDispatch, useSelector } from "react-redux";


const AllTaskList = (props)=>{
  const {tasks} = props;
  const {allTaskListInputValue} = props;
  const allTaskListFiltered = tasks.filter((item)=>{
        if(item.name.toLowerCase().includes(allTaskListInputValue.toLowerCase()))
        {
            return item;
        }
  })
  const dispatch = useDispatch();
  
  return(
    <>
        {tasks.length != 0 ?(
            allTaskListFiltered.map(({name,isDone,isImportant},index)=>{
                return(
                    <>
                        <tr style={{display:'flex',justifyContent:'space-between'}}>
                            <td>
                                <div onClick={()=>{dispatch({type:'FLIP_ISDONE',payload:index})}} style={isDone ? {textDecorationLine:'line-through',cursor:'pointer'} : {textDecorationLine:'none',cursor:'pointer'}} hover="color:red">{name}</div>
                            </td>
                            <td>
                                <img style={{cursor:'pointer'}} onClick={()=>{dispatch({type:'REMOVE_TASK',payload:index})}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Symbol_delete_vote.svg/1200px-Symbol_delete_vote.svg.png" width="25px"/>
                            </td>
                        </tr>
                    </>
                )
            }))
            :<div >Список задач відсутній!!!</div>
        }
        {allTaskListFiltered.length == 0 &&  tasks.length != 0 ? <div>Нічого не знайдено...</div> : null}
        
    </>
  )
}

export default AllTaskList;