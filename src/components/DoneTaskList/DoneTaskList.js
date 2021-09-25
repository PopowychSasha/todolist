import { useState } from "react"

const DoneTaskList = (props)=>{
    const{tasks} = props;
    const[doneTaskInputValue,setDoneTaskInutValue] = useState('');

    const doneTask = tasks.filter(({name,isDone})=>{
        if(isDone)
        {
            return name;
        }
    })

    const doneTaskFiltered = doneTask.filter((item)=>{
        if(item.name.toLowerCase().includes(doneTaskInputValue.toLowerCase()))
        {
            return item;
        }
    })
  return(
    <>
        <input class="form-control" onChange={(e)=>{
                if(doneTask.length==0)
                {
                    alert('Список виконананих задач відсутній, що ви вирішили пошукати???');
                }
                else{
                    setDoneTaskInutValue(e.target.value)
                }
            
            }} placeholder="find done task..." value={doneTaskInputValue}/> <br/><br/>
        {doneTask.length !=0 ?
            <div style={{marginTop:'25px'}}>
                {
                    doneTaskFiltered.map(({name})=>{
                        return(
                            <div style={{display:'flex',justifyContent:'space-between',border:'1px solid silver',marginBottom:'10px',padding:'5px'}}>
                                <div >{name}</div>
                                <img src="https://icon-library.com/images/all-done-icon/all-done-icon-7.jpg" width="20px"/>
                            </div>
                        )
                    })
                }
            </div>
            :<div>Список виконаних задач відсутній</div>
        }
        {doneTaskFiltered.length == 0 &&  doneTask.length != 0 ? <div>Нічого не знайдено...</div> : null}

    </>
  )
}

export default DoneTaskList;