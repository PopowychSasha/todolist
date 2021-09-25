
import { useState } from 'react';

const ActiveTaskList = (props)=>{
    const{tasks} = props;
    const[activeTaskInputValue,setInputTaskInputValue] = useState('');

    const activeTask = tasks.filter(({name,isDone})=>{
        if(isDone==false)
        {
            return name;
        }
    })
    
    const activeTasksFiltered = activeTask.filter((task)=>{
        if(task.name.toLowerCase().includes(activeTaskInputValue.toLowerCase())){
            return task;
        }
    });
  return(
    <>
    <input class="form-control" onChange={(e)=>{
        
        if(activeTask.length==0)
        {
            alert('Активних задач немає, що ви вирішили пошукати???');
        }
        else{
            setInputTaskInputValue(e.target.value)
        }

        }} placeholder="find active task..." value={activeTaskInputValue}/> <br/><br/>
        {activeTask.length != 0 ? 
            <div style={{marginTop:'25px'}}>
                {         
                    activeTasksFiltered.map(({name})=>{
                        return(
                            <div style={{display:'flex',justifyContent:'space-between', border:'1px solid silver',marginBottom:'10px',padding:'5px'}}>
                                <div >{name}</div>
                                <img src="https://icons.veryicon.com/png/o/application/aone-official-icon-library/undone_done.png" width="20px"/>
                            </div>
                        )
                    })
                }
            </div>
        :<div>Список активних задач відсутній!!!</div>
        }
        {activeTasksFiltered.length == 0 &&  activeTask.length != 0 ? <div>Нічого не знайдено...</div> : null}
    </>
  )
}

export default ActiveTaskList;